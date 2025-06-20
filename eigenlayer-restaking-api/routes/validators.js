const express = require('express');
const router = express.Router();
const { getValidators, addValidator } = require('../controllers/validatorsController');

router.get('/', getValidators);           // GET validators
router.post('/', addValidator);           // POST new validator

module.exports = router;
