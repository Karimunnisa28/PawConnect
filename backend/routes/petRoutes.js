// routes/petRoutes.js
const express = require('express');
const router = express.Router();
const { createPet, getPets, getPetById } = require('../controllers/petController');
const auth = require('../middleware/auth');

// Routes
router.post('/', auth, createPet);
router.get('/', auth, getPets);
router.get('/:id', auth, getPetById);

module.exports = router;