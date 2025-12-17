import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"; // Import the CSS file

const PublicDashboard = ({ setUser }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/");
    };

    return (
        <div className="dashboard-container">
            <h2>🎉 Welcome to Your Dashboard!</h2>
            <p>This is your personalized space where you can manage your account and view your data.</p>

            <div className="dashboard-content">
                <h3>🌟 Features Available:</h3>
                <ul>
                    <li>✔ View and edit your profile</li>
                    <li>✔ Access personalized recommendations</li>
                    <li>✔ Track your activities</li>
                    <li>✔ Logout securely</li>
                </ul>
            </div>

            <button className="logout-btn" onClick={handleLogout}>🚪 Logout</button>
        </div>
    );
};

export default PublicDashboard;