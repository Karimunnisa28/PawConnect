const { validationResult } = require('express-validator');

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            message: "Validation Error",
            errors: errors.array() 
        });
    }
    next();
};

// Validation rules
const userValidationRules = {
    register: [
        body('username').trim().isLength({ min: 3 }).withMessage('Username must be at least 3 characters'),
        body('email').isEmail().withMessage('Must be a valid email'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
    ],
    
    login: [
        body('email').isEmail().withMessage('Must be a valid email'),
        body('password').exists().withMessage('Password is required')
    ]
};

const petValidationRules = {
    create: [
        body('name').trim().notEmpty().withMessage('Pet name is required'),
        body('species').trim().notEmpty().withMessage('Species is required'),
        body('age').optional().isNumeric().withMessage('Age must be a number')
    ]
};

module.exports = {
    validateRequest,
    userValidationRules,
    petValidationRules
};