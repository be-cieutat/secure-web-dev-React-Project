import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/users/login", { email, password });
            console.log(response.data); // handle the response from the API here
        } catch (error) {
            console.error(error);
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Redirect to the register page or open a modal window
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <input type="submit" value="Login" />
                <button type="button" onClick={handleRegister}>Don't have an account ? Register here</button>
            </form>
        </div>
    );
}

export default LoginPage;


