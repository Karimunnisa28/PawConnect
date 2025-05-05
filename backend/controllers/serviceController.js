// controllers/serviceController.js
const Service = require('../models/serviceModel');

// Create service
exports.createService = async (req, res) => {
    try {
        const service = await Service.create({
            ...req.body,
            provider: req.userId
        });
        res.status(201).json(service);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all services
exports.getServices = async (req, res) => {
    try {
        const services = await Service.find()
            .populate('provider', 'username profile');
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get service by ID
exports.getServiceById = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id)
            .populate('provider', 'username profile');
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }
        res.json(service);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update service
exports.updateService = async (req, res) => {
    try {
        const service = await Service.findOneAndUpdate(
            { _id: req.params.id, provider: req.userId },
            req.body,
            { new: true }
        );
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }
        res.json(service);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete service
exports.deleteService = async (req, res) => {
    try {
        const service = await Service.findOneAndDelete({
            _id: req.params.id,
            provider: req.userId
        });
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }
        res.json({ message: "Service deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};