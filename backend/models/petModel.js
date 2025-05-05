// models/petModel.js
const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    species: String,
    breed: String,
    age: Number,
    gender: String,
    medicalRecords: [{
        date: Date,
        description: String,
        veterinarian: String
    }]
}, { timestamps: true });

module.exports = mongoose.model('Pet', petSchema);