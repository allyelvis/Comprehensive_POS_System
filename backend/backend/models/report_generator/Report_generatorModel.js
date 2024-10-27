const mongoose = require('mongoose');

const Report_generatorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Report_generator', Report_generatorSchema);
