const mongoose = require('mongoose');

const Car_dealerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Car_dealer', Car_dealerSchema);
