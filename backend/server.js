const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());
app.use(cors());

// --- MongoDB Connection ---
mongoose.connect("mongodb://127.0.0.1:27017/patientsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error(err));

// --- Schema ---
const patientSchema = new mongoose.Schema({
  username: String,
  password: String,
  otp: String,
});

const Patient = mongoose.model("Patient", patientSchema);

// --- Signup Route ---
app.post("/api/patient/signup", async (req, res) => {
  try {
    const { username, password, otp } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newPatient = new Patient({ username, password: hashedPassword, otp });
    await newPatient.save();

    res.status(201).json({ message: "✅ Patient registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error registering patient" });
  }
});

// --- Login Route ---
app.post("/api/patient/login", async (req, res) => {
  try {
    const { username, password, otp } = req.body;

    const patient = await Patient.findOne({ username });
    if (!patient) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    if (otp !== patient.otp)
      return res.status(400).json({ message: "Invalid OTP" });

    res.json({ message: "✅ Login successful" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// --- Start Server ---
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
