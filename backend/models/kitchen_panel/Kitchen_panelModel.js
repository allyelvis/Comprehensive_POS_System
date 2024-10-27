const mongoose = require('mongoose');

const Kitchen_panelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Kitchen_panel', Kitchen_panelSchema);
