const express = require('express');
const Mail = require('../models/Mail');
const auth = require('../middleware/auth');

const router = express.Router();

// Get all emails (inbox, sent, trash)
router.get('/', auth, async (req, res) => {
  try {
    const { type } = req.query;
    const userEmail = req.user.email;

    let query = {};

    if (type === 'inbox') {
      query = { to: userEmail, deleted: false };
    } else if (type === 'sent') {
      query = { from: userEmail, deleted: false };
    } else if (type === 'trash') {
      query = { $or: [{ to: userEmail }, { from: userEmail }], deleted: true };
    }

    const emails = await Mail.find(query).sort({ createdAt: -1 });
    res.json(emails);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Send email
router.post('/', auth, async (req, res) => {
  try {
    const { to, subject, body } = req.body;

    const mail = new Mail({
      from: req.user.email,
      to,
      subject,
      body,
      userId: req.user.id
    });

    await mail.save();
    res.json({ message: 'Email sent successfully!', mail });
  } catch (err) {
    res.status(500).json({ message: 'Error sending email', error: err.message });
  }
});

// Mark as read
router.patch('/:id/read', auth, async (req, res) => {
  try {
    const mail = await Mail.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    res.json(mail);
  } catch (err) {
    res.status(500).json({ message: 'Error updating email', error: err.message });
  }
});

// Delete email
// Delete email (soft delete for inbox/sent)
router.delete('/:id', auth, async (req, res) => {
  try {
    const mail = await Mail.findById(req.params.id);
    
    if (!mail) {
      return res.status(404).json({ message: 'Email not found' });
    }

    // If email is already in trash (deleted: true), permanently delete it
    if (mail.deleted) {
      await Mail.findByIdAndDelete(req.params.id);
      return res.json({ message: 'Email permanently deleted' });
    }
    
    // Otherwise, just mark as deleted (move to trash)
    await Mail.findByIdAndUpdate(req.params.id, { deleted: true });
    res.json({ message: 'Email moved to trash' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting email', error: err.message });
  }
});

module.exports = router;