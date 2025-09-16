import React from "react";
import { useNavigate } from "react-router-dom";

export const PatientDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Redirect back to login page
    navigate("/patient-login");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Welcome to the Dummy Patient Dashboard!</h1>
      <p>This page is just for testing navigation after login.</p>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#006d92",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px",
        }}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};
