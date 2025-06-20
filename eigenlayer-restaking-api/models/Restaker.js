// models/Restaker.js
const mongoose = require('mongoose');

const restakerSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  amount_restaked: {
    type: String,
    required: true
  },
  validator: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Restaker', restakerSchema);
