const Validator = require('../models/Validator');

// GET /validators
exports.getValidators = async (req, res) => {
  try {
    const validators = await Validator.find();
    res.json(validators);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch validators' });
  }
};

// POST /validators
exports.addValidator = async (req, res) => {
  try {
    const newValidator = new Validator(req.body);
    const saved = await newValidator.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: 'Failed to save validator', message: err.message });
  }
};
