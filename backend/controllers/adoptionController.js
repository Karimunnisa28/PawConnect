// controllers/adoptionController.js
const Adoption = require('../models/adoptionModel');

// Create adoption listing
exports.createAdoption = async (req, res) => {
    try {
        const adoption = await Adoption.create({
            ...req.body,
            shelter: req.userId
        });
        res.status(201).json(adoption);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all adoption listings
exports.getAdoptions = async (req, res) => {
    try {
        const adoptions = await Adoption.find()
            .populate('pet')
            .populate('shelter', 'username profile')
            .sort('-createdAt');
        res.json(adoptions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get adoption by ID
exports.getAdoptionById = async (req, res) => {
    try {
        const adoption = await Adoption.findById(req.params.id)
            .populate('pet')
            .populate('shelter', 'username profile')
            .populate('applications.applicant', 'username profile');
        
        if (!adoption) {
            return res.status(404).json({ message: "Adoption listing not found" });
        }
        res.json(adoption);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update adoption listing
exports.updateAdoption = async (req, res) => {
    try {
        const adoption = await Adoption.findOneAndUpdate(
            { _id: req.params.id, shelter: req.userId },
            req.body,
            { new: true }
        );
        
        if (!adoption) {
            return res.status(404).json({ message: "Adoption listing not found" });
        }
        res.json(adoption);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete adoption listing
exports.deleteAdoption = async (req, res) => {
    try {
        const adoption = await Adoption.findOneAndDelete({
            _id: req.params.id,
            shelter: req.userId
        });
        
        if (!adoption) {
            return res.status(404).json({ message: "Adoption listing not found" });
        }
        res.json({ message: "Adoption listing deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Apply for adoption
exports.applyForAdoption = async (req, res) => {
    try {
        const adoption = await Adoption.findById(req.params.id);
        
        if (!adoption) {
            return res.status(404).json({ message: "Adoption listing not found" });
        }

        // Check if user already applied
        const existingApplication = adoption.applications.find(
            app => app.applicant.toString() === req.userId
        );

        if (existingApplication) {
            return res.status(400).json({ message: "You have already applied for this adoption" });
        }

        adoption.applications.push({
            applicant: req.userId,
            message: req.body.message,
            status: 'pending'
        });

        await adoption.save();
        res.json(adoption);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update application status
exports.updateApplicationStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const adoption = await Adoption.findOne({
            _id: req.params.id,
            shelter: req.userId
        });

        if (!adoption) {
            return res.status(404).json({ message: "Adoption listing not found" });
        }

        const application = adoption.applications.id(req.params.applicationId);
        if (!application) {
            return res.status(404).json({ message: "Application not found" });
        }

        application.status = status;
        if (status === 'approved') {
            adoption.status = 'adopted';
            // Reject all other applications
            adoption.applications.forEach(app => {
                if (app._id.toString() !== req.params.applicationId) {
                    app.status = 'rejected';
                }
            });
        }

        await adoption.save();
        res.json(adoption);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};