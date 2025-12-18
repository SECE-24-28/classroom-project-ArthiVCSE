import React, { useState } from 'react';
import { X } from 'lucide-react';
import API from '../services/api';

const Compose = ({ onClose, onSent, userEmail }) => {
  const [form, setForm] = useState({ to: '', subject: '', body: '' });

  const handleSend = async () => {
    if (!form.to || !form.subject || !form.body) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await API.post('/mail', form);
      alert('Email sent successfully! ✉️');
      onSent();
      onClose();
    } catch (err) {
      alert('Error sending email');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">New Message</h3>
          <button onClick={onClose} className="icon-btn" style={{ color: '#374151' }}>
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="modal-body">
          <input
            type="email"
            value={form.to}
            onChange={(e) => setForm({ ...form, to: e.target.value })}
            placeholder="To"
            className="compose-input"
          />
          <input
            type="text"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            placeholder="Subject"
            className="compose-input"
          />
          <textarea
            value={form.body}
            onChange={(e) => setForm({ ...form, body: e.target.value })}
            placeholder="Message"
            className="compose-textarea"
            rows="8"
          />
          <button onClick={handleSend} className="btn-send">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Compose;