// controllers/restakersController.js
const Restaker = require('../models/Restaker');

// GET /restakers
exports.getRestakers = async (req, res) => {
  try {
    const restakers = await Restaker.find();
    res.json(restakers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch restakers' });
  }
};

// POST /restakers
exports.addRestaker = async (req, res) => {
  try {
    const newRestaker = new Restaker(req.body);
    const saved = await newRestaker.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: 'Failed to save restaker', message: err.message });
  }
};
