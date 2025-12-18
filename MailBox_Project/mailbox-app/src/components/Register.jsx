import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import API from '../services/api';

const Register = ({ onSwitchToLogin }) => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async () => {
    if (!form.username || !form.email || !form.password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const { data } = await API.post('/auth/register', form);
      setSuccess(data.message);
      setError('');
      // Auto switch to login after 2 seconds
      setTimeout(() => {
        onSwitchToLogin();
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      setSuccess('');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <Mail className="login-icon" />
          <h1 className="login-title">MailBox</h1>
        </div>
        
        <h2 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '600' }}>
          Create Account
        </h2>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {success && (
          <div style={{
            backgroundColor: '#d1fae5',
            color: '#065f46',
            padding: '0.75rem',
            borderRadius: '0.5rem',
            marginBottom: '1rem'
          }}>
            {success}
          </div>
        )}

        <div>
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="form-input"
              placeholder="Enter your name"
              onKeyPress={(e) => e.key === 'Enter' && handleRegister()}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="form-input"
              placeholder="john@example.com"
              onKeyPress={(e) => e.key === 'Enter' && handleRegister()}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="form-input"
              placeholder="••••••••"
              onKeyPress={(e) => e.key === 'Enter' && handleRegister()}
            />
          </div>
          <button
            onClick={handleRegister}
            className="btn-login"
          >
            Register
          </button>
        </div>
        
        <p className="demo-text">
          Already have an account?{' '}
          <button
            onClick={onSwitchToLogin}
            style={{
              background: 'none',
              border: 'none',
              color: '#0284c7',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontSize: '0.875rem'
            }}
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;