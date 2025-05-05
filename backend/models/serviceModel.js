// models/serviceModel.js
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: String,
    category: {
        type: String,
        enum: ['grooming', 'walking', 'training', 'veterinary', 'boarding', 'other']
    },
    price: {
        amount: Number,
        currency: String
    },
    availability: [{
        day: String,
        slots: [String]
    }],
    ratings: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        rating: Number,
        review: String
    }]
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);