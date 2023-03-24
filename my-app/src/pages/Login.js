import React from "react";
import "../styles/Login.css";

function LoginPage() {
    return (
        <div className="container">
            <h1>Login</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" />

                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default LoginPage;
