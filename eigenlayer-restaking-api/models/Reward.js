// models/Reward.js
const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    unique: true
  },
  total_rewards: {
    type: String,
    required: true
  },
  breakdown: [
    {
      validator: String,
      amount: String,
      timestamp: String
    }
  ]
});

module.exports = mongoose.model('Reward', rewardSchema);
