// controllers/petController.js
const Pet = require('../models/petModel');

// Create pet
exports.createPet = async (req, res) => {
    try {
        const pet = await Pet.create({
            ...req.body,
            owner: req.userId
        });
        res.status(201).json(pet);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all pets
exports.getPets = async (req, res) => {
    try {
        const pets = await Pet.find({ owner: req.userId });
        res.json(pets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get pet by ID
exports.getPetById = async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);
        if (!pet) {
            return res.status(404).json({ message: "Pet not found" });
        }
        res.json(pet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};