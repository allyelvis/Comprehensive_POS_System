const mongoose = require('mongoose');

const Development_ideSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Development_ide', Development_ideSchema);
