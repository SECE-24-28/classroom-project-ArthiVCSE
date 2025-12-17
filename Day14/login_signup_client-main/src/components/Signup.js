import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css"; // Import the CSS file

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/register", { name, email, password })
            setMessage("✅ Signup successful! Redirecting to login...");
            setTimeout(() => navigate("/"), 2000);
        } catch (err) {
            setMessage("❌ Signup failed. Try again!");
        }
    };

    return (
        <div className="auth-container">
            <h2>Signup</h2>
            {message && <p className="message">{message}</p>}
            <form onSubmit={handleSignup}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Signup</button>
            </form>
            <p>Already have an account? <a href="/">Login</a></p>
        </div>
    );
};

export default Signup;