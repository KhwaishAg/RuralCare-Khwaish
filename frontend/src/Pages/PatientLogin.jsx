import React, { useState } from "react";

export const PatientLogin = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/patient/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Login Successful");
      } else {
        setMessage(data.message);
      }
    } catch (err) {
      setMessage("⚠️ Server error. Try again.");
    }
  };

  // Inline styles
  const overlayStyle = {
    position: "fixed",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  };

  const boxStyle = {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    width: "400px",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "14px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    backgroundColor: "#006d92",
    color: "white",
  };

  return (
    <div style={overlayStyle}>
      <div style={boxStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>

        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter username"
            style={inputStyle}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div style={{ marginBottom: "14px" }}>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />{" "}
            Show Password
          </div>

          <button type="submit" style={buttonStyle}>
            SIGN IN
          </button>
        </form>

        {message && (
          <p style={{ marginTop: "10px", textAlign: "center", color: "red" }}>
            {message}
          </p>
        )}

        <p style={{ marginTop: "20px", textAlign: "center", fontSize: "14px" }}>
          Don't have an account?{" "}
          <a href="/signup" style={{ color: "#006d92", textDecoration: "none" }}>
            Sign up
          </a>
        </p>

        <button
          style={{
            ...buttonStyle,
            marginTop: "10px",
            backgroundColor: "#6b7280",
          }}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
