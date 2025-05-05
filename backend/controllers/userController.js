const User = require('../models/userModel');

// Get user profile
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update user profile
exports.updateProfile = async (req, res) => {
    try {
        const updates = req.body;
        const user = await User.findByIdAndUpdate(
            req.userId,
            { profile: updates },
            { new: true }
        ).select('-password');
        
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};