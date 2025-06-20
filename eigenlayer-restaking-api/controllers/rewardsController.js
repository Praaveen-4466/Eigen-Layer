// controllers/rewardsController.js
const Reward = require('../models/Reward');

// GET /rewards/:address
exports.getRewards = async (req, res) => {
  const { address } = req.params;
  try {
    const reward = await Reward.findOne({ address: address.toLowerCase() });
    if (!reward) return res.status(404).json({ message: 'No rewards found' });
    res.json(reward);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch rewards' });
  }
};

// POST /rewards/:address
exports.addReward = async (req, res) => {
  const { address } = req.params;
  try {
    const existing = await Reward.findOne({ address: address.toLowerCase() });

    if (existing) {
      // If reward already exists, update it
      existing.total_rewards = req.body.total_rewards;
      existing.breakdown = req.body.breakdown;
      const updated = await existing.save();
      return res.status(200).json(updated);
    }

    // Create new reward document
    const reward = new Reward({
      address: address.toLowerCase(),
      total_rewards: req.body.total_rewards,
      breakdown: req.body.breakdown
    });

    const saved = await reward.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: 'Failed to save reward', message: err.message });
  }
};
