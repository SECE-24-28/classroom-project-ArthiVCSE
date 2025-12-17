import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"; // Import the CSS file

const AdminDashboard = ({ setUser }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/");
    };

    return (
        <div className="dashboard-container">
            <h2>👑 Admin Dashboard</h2>
            <p>Welcome, Administrator! You have full access to manage the system.</p>

            <div className="dashboard-content">
                <h3>🛡️ Admin Features:</h3>
                <ul>
                    <li>📊 View all user accounts</li>
                    <li>➕ Create new user accounts</li>
                    <li>✏️ Edit user permissions</li>
                    <li>🗑️ Delete user accounts</li>
                    <li>📈 System analytics</li>
                    <li>⚙️ System configuration</li>
                </ul>
            </div>

            <button className="logout-btn" onClick={handleLogout}>🚪 Logout</button>
        </div>
    );
};

export default AdminDashboard;