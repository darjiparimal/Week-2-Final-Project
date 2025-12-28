import { useState } from "react";

export default function Auth({ onAuth }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    if (isLogin) {
      const savedUser = JSON.parse(localStorage.getItem("user"));

      if (
        savedUser &&
        savedUser.email === email &&
        savedUser.password === password
      ) {
        localStorage.setItem("isLoggedIn", "true");
        onAuth();
      } else {
        setError("Invalid email or password");
      }
    } else {
      localStorage.setItem(
        "user",
        JSON.stringify({ email, password })
      );
      setIsLogin(true);
      setError("");
      alert("Registration successful! Please login.");
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <img
          src="/favicon.png"
          alt="AnimeWorld Logo"
          className="auth-logo"
        />

        <h2>
          {isLogin ? "Login to " : "Register on "}
          <span>AnimeWorld</span>
        </h2>

        <form onSubmit={handleSubmit}>
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

          {error && <p className="auth-error">{error}</p>}

          <button type="submit">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="auth-toggle">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Register" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
