// models/adoptionModel.js
const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
});

const adoptionSchema = new mongoose.Schema({
    pet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet',
        required: true
    },
    shelter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['available', 'pending', 'adopted'],
        default: 'available'
    },
    description: {
        type: String,
        required: true
    },
    requirements: [String],
    fee: {
        amount: Number,
        currency: {
            type: String,
            default: 'USD'
        }
    },
    location: String,
    applications: [applicationSchema],
    photos: [String]
}, { timestamps: true });

module.exports = mongoose.model('Adoption', adoptionSchema);