// src/components/LoginPage.jsx
import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        className="input-field"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input-field"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="button">Login</button>
    </div>
  );
};

export default LoginPage;
