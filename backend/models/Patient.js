const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Patient", PatientSchema);
