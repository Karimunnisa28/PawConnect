const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();

// Fix mongoose deprecation warning
mongoose.set('strictQuery', false);

const app = express();

// CORS configuration
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const userRoutes = require('./routes/userRoutes');
const petRoutes = require('./routes/petRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const postRoutes = require('./routes/postRoutes');
const adoptionRoutes = require('./routes/adoptionRoutes');
// Added auth routes

// Enhanced test route for frontend connection
app.get('/api/test', (req, res) => {
    res.json({
        message: "Backend connection successful!",
        status: "online",
        timestamp: new Date(),
        mongoStatus: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
        environment: process.env.NODE_ENV || 'development',
        serverInfo: {
            uptime: process.uptime(),
            memoryUsage: process.memoryUsage(),
            nodeVersion: process.version
        }
    });
});

// Service-specific test routes
app.get('/api/test/services', (req, res) => {
    res.json({
        message: "Services API is working",
        status: "active",
        endpoints: {
            getAllServices: '/api/services',
            bookService: '/api/services/book',
            calendar: '/api/services/calendar'
        }
    });
});

app.get('/api/test/pets', (req, res) => {
    res.json({
        message: "Pets API is working",
        status: "active",
        endpoints: {
            getAllPets: '/api/pets',
            createPet: '/api/pets',
            updatePet: '/api/pets/:id'
        }
    });
});

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/adoptions', adoptionRoutes);
// Added auth routes middleware

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Basic route
app.get('/', (req, res) => {
    res.json({ 
        message: "Welcome to PawConnect API",
        status: "Server is running",
        version: "1.0.0",
        mongoStatus: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
    });
});

// Enhanced health check route
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date(),
        server: {
            uptime: process.uptime(),
            environment: process.env.NODE_ENV || 'development',
            memory: process.memoryUsage(),
            nodeVersion: process.version
        },
        mongodb: {
            status: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
            database: 'pawconnect'
        },
        services: {
            auth: 'active',        // Added auth service status
            pets: 'active',
            services: 'active',
            posts: 'active',
            adoptions: 'active'
        }
    });
});

// Error handling middleware
app.use(errorHandler);

// Handle 404 routes
app.use('*', (req, res) => {
    res.status(404).json({
        message: "Route not found",
        path: req.originalUrl
    });
});

// MongoDB Connection with enhanced error handling
mongoose.connect('mongodb://127.0.0.1:27017/pawconnect', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Successfully connected to MongoDB.');
})
.catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.error(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.error(err.name, err.message);
    process.exit(1);
});

// Create uploads directory if it doesn't exist
const fs = require('fs');
if (!fs.existsSync('./uploads')) {
    fs.mkdirSync('./uploads');
}

// Start server
const PORT = process.env.PORT || 5001;
const server = app.listen(PORT, () => {
    console.log(`
    🚀 Server is running on port ${PORT}
    🌍 Environment: ${process.env.NODE_ENV || 'development'}
    📦 MongoDB Status: ${mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'}
    🔗 API URL: http://localhost:${PORT}
    🔍 Health Check: http://localhost:${PORT}/api/health
    🧪 Test API: http://localhost:${PORT}/api/test
    🔐 Auth Endpoints:
       - Register: POST http://localhost:${PORT}/api/auth/register
       - Login: POST http://localhost:${PORT}/api/auth/login
    `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
    server.close(() => {
        console.log('💥 Process terminated!');
        mongoose.connection.close(false, () => {
            process.exit(0);
        });
    });
});

module.exports = app;