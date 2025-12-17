import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PublicDashboard from "./components/Dashbord";
import AdminDashboard from "./components/AdminDashboard";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");
    if (token) {
      setUser({
        token: token,
        role: userRole || 'public'
      });
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? (user.role === 'admin' ? <Navigate to="/admin-dashboard" /> : <Navigate to="/dashboard" />) : <Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={user && user.role !== 'admin' ? <PublicDashboard setUser={setUser} /> : <Navigate to="/" />} />
        <Route path="/admin-dashboard" element={user && user.role === 'admin' ? <AdminDashboard setUser={setUser} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;