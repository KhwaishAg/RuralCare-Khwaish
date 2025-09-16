import React, { useState } from "react";

export const DoctorLogin = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Doctor logged in with ${username} / ${password}`);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-center">Doctor Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border mb-3 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Login
        </button>
      </form>
      <button
        className="mt-4 w-full bg-gray-500 text-white py-2 rounded"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};
