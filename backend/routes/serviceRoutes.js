// routes/serviceRoutes.js
const express = require('express');
const router = express.Router();
const { 
    createService, 
    getServices, 
    getServiceById, 
    updateService, 
    deleteService 
} = require('../controllers/serviceController');
const auth = require('../middleware/auth');

// Routes
router.post('/', auth, createService);
router.get('/', getServices);
router.get('/:id', getServiceById);
router.put('/:id', auth, updateService);
router.delete('/:id', auth, deleteService);

module.exports = router;