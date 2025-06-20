// routes/rewards.js
const express = require('express');
const router = express.Router();
const { getRewards, addReward } = require('../controllers/rewardsController');

router.get('/:address', getRewards);     // GET rewards for address
router.post('/:address', addReward);     // POST or update reward for address

module.exports = router;
