import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import API from '../services/api';

const Login = ({ onLogin, onSwitchToRegister }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      alert('Please enter both email and password');
      return;
    }

    try {
      const { data } = await API.post('/auth/login', form);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      onLogin(data.user);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
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
          Login
        </h2>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="form-input"
              placeholder="abc@example.com"
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
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
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            />
          </div>
          <button
            onClick={handleLogin}
            className="btn-login"
          >
            Login
          </button>
        </div>
        
        <p className="demo-text">
          New user?{' '}
          <button
            onClick={onSwitchToRegister}
            style={{
              background: 'none',
              border: 'none',
              color: '#0284c7',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontSize: '0.875rem'
            }}
          >
            Create an account
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;