// routes/restakers.js
const express = require('express');
const router = express.Router();
const { getRestakers, addRestaker } = require('../controllers/restakersController');

router.get('/', getRestakers);          // GET all restakers
router.post('/', addRestaker);          // POST new restaker

module.exports = router;
