import React, { useState } from 'react';
import { Mail, Search, User, Menu, FileText, CheckSquare } from 'lucide-react';

const Navbar = ({ user, onLogout, onToggleSidebar, onToggleNotes, onToggleTasks, searchQuery, setSearchQuery }) => {
const [showAccountMenu, setShowAccountMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <button onClick={onToggleSidebar} className="icon-btn">
            <Menu className="w-6 h-6" />
          </button>
          <div className="navbar-brand">
            <Mail className="w-6 h-6" />
            <span className="navbar-title">MailBox</span>
          </div>
        </div>

        <div className="navbar-search">
          <Search className="search-icon w-5 h-5" />
          <input type="text" value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search emails..."className="search-input"/>
        </div>

        <div className="navbar-right">
          <button onClick={onToggleNotes} className="icon-btn" title="Notes">
            <FileText className="w-6 h-6" />
          </button>
          <button onClick={onToggleTasks} className="icon-btn" title="Tasks">
            <CheckSquare className="w-6 h-6" />
          </button>
          <div className="account-menu">
            <button onClick={() => setShowAccountMenu(!showAccountMenu)} className="icon-btn">
              <div style={{ width: '2rem', height: '2rem', backgroundColor: '#0369a1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <User className="w-5 h-5" />
              </div>
            </button>
            {showAccountMenu && (
              <div className="account-dropdown">
                <div className="account-info">
                  <p className="account-username">{user.username}</p>
                  <p className="account-email">{user.email}</p>
                </div>
                <button
                  onClick={() => {
                    onLogout();
                    setShowAccountMenu(false);
                  }}
                  className="logout-btn"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;