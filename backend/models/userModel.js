const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        name: String,
        bio: String,
        avatar: String,
        location: String
    },
    role: {
        type: String,
        enum: ['user', 'business', 'admin'],
        default: 'user'
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);