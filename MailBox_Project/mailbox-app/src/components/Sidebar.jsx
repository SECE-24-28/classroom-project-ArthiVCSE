import React from 'react';
import { Inbox, Send, Trash2, Plus } from 'lucide-react';

const Sidebar = ({ isOpen, currentView, setCurrentView, onCompose, unreadCount }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-content">
        <button onClick={onCompose} className="sidebar-btn compose-btn">
          <Plus className="w-5 h-5" />
          <span>Compose</span>
        </button>
        <button
          onClick={() => setCurrentView('inbox')}
          className={`sidebar-btn ${currentView === 'inbox' ? 'active' : ''}`}
        >
          <Inbox className="w-5 h-5" />
          <span>Inbox</span>
          {unreadCount > 0 && (
            <span style={{
              
              marginLeft: 'auto',
              backgroundColor: '#dc2626',
              color: 'white',
              borderRadius: '9999px',
              padding: '0.125rem 0.5rem',
              fontSize: '0.75rem',
              fontWeight: '600'
            }}>
              {unreadCount}
            </span>
          )}
        </button>
        <button
          onClick={() => setCurrentView('sent')}
          className={`sidebar-btn ${currentView === 'sent' ? 'active' : ''}`}
        >
          <Send className="w-5 h-5" />
          <span>Sent</span>
        </button>
        <button
          onClick={() => setCurrentView('trash')}
          className={`sidebar-btn ${currentView === 'trash' ? 'active' : ''}`}
        >
          <Trash2 className="w-5 h-5" />
          <span>Trash</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;