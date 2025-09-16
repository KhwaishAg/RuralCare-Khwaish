const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Patient = require("../models/Patient");
const auth = require("../middleware/auth");

// Signup
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user exists
    const existingPatient = await Patient.findOne({ username });
    if (existingPatient) return res.status(400).json({ message: "Username already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new patient
    const newPatient = new Patient({ username, password: hashedPassword });
    await newPatient.save();

    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const patient = await Patient.findOne({ username });
    if (!patient) return res.status(400).json({ message: "Invalid credentials" });

    // Compare password
    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Optionally create a JWT token
    const token = jwt.sign({ id: patient._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/dashboard", auth, async (req, res) => {
  const patient = await Patient.findById(req.patient).select("-password");
  res.json({ patient });
});

module.exports = router;
