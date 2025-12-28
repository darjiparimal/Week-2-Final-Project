import { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Simple validation (demo)
    if (email && password) {
      localStorage.setItem("isLoggedIn", "true");
      onLogin();
    } else {
      alert("Please enter email and password");
    }
  }

  return (
    <div className="auth-container">
      <h1>Login to <span>AnimeWorld</span></h1>

      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
