import React, { useState } from "react";
import "../styles/Login.css";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [registered, setRegistered] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setRegistered(true);
    };

    if (registered) {
        return <div>You are now registered!</div>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <label>
                Confirm Password:
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;
