import React, { useState } from "react";
import { PatientLogin } from "./PatientLogin";
import { DoctorLogin } from "./DoctorLogin";
import "./LoginSignup.css"; // <-- link to CSS file

export const LoginSignup = ({ onClose }) => {
  const [role, setRole] = useState(null);

  return (
    <div className="login-overlay">
      <div className="login-modal">
        {/* Top Close Button */}
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        {/* If no role selected → show Patient/Doctor choice */}
        {!role && (
          <div className="choice-container">
            <h2 className="choice-title">Continue as</h2>
            <div className="choice-buttons">
              <button
                className="choice-btn"
                onClick={() => setRole("patient")}
              >
                Patient
              </button>
              <button
                className="choice-btn"
                onClick={() => setRole("doctor")}
              >
                Doctor
              </button>
            </div>
          </div>
        )}

        {/* Patient login modal */}
        {role === "patient" && <PatientLogin onClose={onClose} />}

        {/* Doctor login modal */}
        {role === "doctor" && <DoctorLogin onClose={onClose} />}
      </div>
    </div>
  );
};

