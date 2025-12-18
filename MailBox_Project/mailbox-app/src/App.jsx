import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import EmailList from './components/EmailList';
import Compose from './components/Compose';
import Notes from './components/Notes';
import Tasks from './components/Tasks';
import API from './services/api';

function App() {
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState('inbox');
  const [showCompose, setShowCompose] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      loadEmails();
    }
  }, [user, currentView]);

  const loadEmails = async () => {
    try {
      const { data } = await API.get(`/mail?type=${currentView}`);
      setEmails(data);
      
      // Calculate unread count for inbox
      if (currentView === 'inbox') {
        const unread = data.filter(email => !email.read).length;
        setUnreadCount(unread);
      }
    } catch (err) {
      console.error('Error loading emails');
    }
  };

  const handleEmailClick = async (email) => {
    if (!email.read) {
      await API.patch(`/mail/${email._id}/read`);
      loadEmails();
    }
    setSelectedEmail(email);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  // If not logged in, show Login or Register
  if (!user) {
    if (showRegister) {
      return <Register onSwitchToLogin={() => setShowRegister(false)} />;
    }
    return <Login onLogin={setUser} onSwitchToRegister={() => setShowRegister(true)} />;
  }

  return (
    <div className="app-container">
      <Navbar
        user={user}
        onLogout={handleLogout}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        onToggleNotes={() => setShowNotes(!showNotes)}
        onToggleTasks={() => setShowTasks(!showTasks)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="main-layout">
        <Sidebar
          isOpen={sidebarOpen}
          currentView={currentView}
          setCurrentView={setCurrentView}
          onCompose={() => setShowCompose(true)}
          unreadCount={unreadCount}
        />

        {selectedEmail ? (
          <div className="email-detail">
            <div className="email-detail-card">
              <button
                onClick={() => setSelectedEmail(null)}
                className="back-btn"
              >
                <span>← Back to {currentView}</span>
              </button>
              <div className="email-detail-header">
                <h2 className="email-detail-title">{selectedEmail.subject}</h2>
                <div className="email-detail-meta">
                  <span>From: {selectedEmail.from}</span>
                  <span>{new Date(selectedEmail.createdAt).toLocaleString()}</span>
                </div>
              </div>
              <p className="email-detail-body">{selectedEmail.body}</p>
            </div>
          </div>
        ) : (
          <EmailList
            emails={emails}
            currentView={currentView}
            searchQuery={searchQuery}
            onEmailClick={handleEmailClick}
            onRefresh={loadEmails}
          />
        )}

        {showNotes && <Notes onClose={() => setShowNotes(false)} />}
        {showTasks && <Tasks onClose={() => setShowTasks(false)} />}
      </div>

      {showCompose && (
        <Compose
          onClose={() => setShowCompose(false)}
          onSent={loadEmails}
          userEmail={user.email}
        />
      )}
    </div>
  );
}

export default App;