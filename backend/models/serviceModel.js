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
    pricing: {
        amount: Number,
        currency: String,
        unit: String
    },
    availability: [{
        day: String,
        slots: [String]
    }],
    category: String,
    ratings: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        rating: Number,
        review: String
    }]
});

module.exports = mongoose.model('Service', serviceSchema);