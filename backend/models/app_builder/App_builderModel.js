const mongoose = require('mongoose');

const App_builderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('App_builder', App_builderSchema);
