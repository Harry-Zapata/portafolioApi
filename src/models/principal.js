const mongoose = require("mongoose");

const principalSchema = new mongoose.Schema({
	nombre: { type: String, required: true },
	profecion: { type: String, required: true },
	cv: { type: String, required: true }
  });

module.exports = mongoose.model("Principal", principalSchema);