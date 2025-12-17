import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css"; // Import the CSS file

const Login = ({ setUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", { email, password })
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.role); // Store user role
            setUser({
                token: res.data.token,
                role: res.data.role
            });
            if (res.data.role === 'admin') {
                navigate("/admin-dashboard");
            } else {
                navigate("/dashboard");
            }
        } catch (err) {
            setError("Invalid credentials!");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/signup">Signup</a></p>
        </div>
    );
};

export default Login;