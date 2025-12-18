import React from 'react';
import { Trash2 } from 'lucide-react';
import API from '../services/api';

const EmailList = ({ emails, currentView, searchQuery, onEmailClick, onRefresh }) => {
  const [selectedEmails, setSelectedEmails] = React.useState([]);

  const filteredEmails = emails.filter(e =>
    e.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSelection = (e, id) => {
    e.stopPropagation(); // prevents from opening that email
    setSelectedEmails(prev =>
      prev.includes(id) ? prev.filter(eid => eid !== id) : [...prev, id]
    );
  };

  const deleteSelected = async () => {
  const action = currentView === 'trash' ? 'permanently delete' : 'move to trash';
  const confirmed = window.confirm(`Are you sure you want to ${action} ${selectedEmails.length} email(s)?`);
  
  if (!confirmed) return;

  try {
    await Promise.all(selectedEmails.map(id => API.delete(`/mail/${id}`)));
    setSelectedEmails([]);
    
    if (currentView === 'trash') {
      alert('Emails permanently deleted! 🗑️');
    } else {
      alert('Emails moved to trash! 📧');
    }
    
    onRefresh();
  } catch (err) {
    alert('Error deleting emails');
  }
};

  return (
    <div className="email-list-container">
      {selectedEmails.length > 0 && (
      <div className="delete-toolbar">
      <span className="selected-count">{selectedEmails.length} selected</span>
      <button onClick={deleteSelected} className="btn-delete">
      <Trash2 className="w-4 h-4" />
      <span>{currentView === 'trash' ? 'Delete Permanently' : 'Delete'}</span>
    </button>
  </div>
)}

      <div>
        {filteredEmails.map(email => (
          <div
            key={email._id}
            className="email-item"
            onClick={() => onEmailClick(email)}
          >
            <div className="email-content">
              <input
                type="checkbox"
                checked={selectedEmails.includes(email._id)}
                onChange={(e) => toggleSelection(e, email._id)}
                onClick={(e) => e.stopPropagation()}
                className="email-checkbox"
              />
              <div className="email-details">
                <div className="email-header">
                  <span className={`email-from ${!email.read ? 'unread' : 'read'}`}>
                    {currentView === 'sent' ? `To: ${email.to}` : `From: ${email.from}`}
                  </span>
                  <span className="email-date">
                    {new Date(email.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className={`email-subject ${!email.read ? 'unread' : 'read'}`}>
                  {email.subject}
                </p>
                <p className="email-preview">{email.body}</p>
              </div>
            </div>
          </div>
        ))}

        {filteredEmails.length === 0 && (
          <div className="empty-state">
            No emails found
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailList;