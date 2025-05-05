// routes/adoptionRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { 
    createAdoption,
    getAdoptions,
    getAdoptionById,
    updateAdoption,
    deleteAdoption,
    applyForAdoption,
    updateApplicationStatus
} = require('../controllers/adoptionController');

// Adoption listing routes
router.post('/', auth, createAdoption);
router.get('/', getAdoptions);
router.get('/:id', getAdoptionById);
router.put('/:id', auth, updateAdoption);
router.delete('/:id', auth, deleteAdoption);

// Application routes
router.post('/:id/apply', auth, applyForAdoption);
router.put('/:id/applications/:applicationId', auth, updateApplicationStatus);

module.exports = router;