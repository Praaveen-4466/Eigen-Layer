// models/Validator.js
const mongoose = require('mongoose');

const validatorSchema = new mongoose.Schema({
  operator_id: String,
  total_delegated_stake: String,
  slash_history: [
    {
      timestamp: String,
      amount: String,
      reason: String
    }
  ],
  status: String
});

module.exports = mongoose.model('Validator', validatorSchema);
