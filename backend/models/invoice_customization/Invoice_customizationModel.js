const mongoose = require('mongoose');

const Invoice_customizationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Invoice_customization', Invoice_customizationSchema);
