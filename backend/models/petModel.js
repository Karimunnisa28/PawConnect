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
    basicInfo: {
        species: String,
        breed: String,
        age: Number,
        gender: String
    },
    medicalRecords: [{
        date: Date,
        description: String,
        veterinarian: String,
        documents: [String]
    }],
    socialProfile: {
        friends: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pet'
        }],
        photos: [String],
        bio: String
    }
});

module.exports = mongoose.model('Pet', petSchema);