const mongoose = require('mongoose');

const GarageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Garage', GarageSchema);
