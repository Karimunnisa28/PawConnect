// src/components/auth/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:5001/api/users/register', formData);
            setMessage('Registration successful!');
            setFormData({ username: '', email: '', password: '' });
            // Redirect to login after successful registration
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Register</h2>
                {message && (
                    <div className={message.includes('successful') ? 'success-message' : 'error-message'}>
                        {message}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username 🐕</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email 📧</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password 🔒</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="Enter your password"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="auth-button"
                        disabled={isLoading}
                    >
                        {isLoading ? '🐾 Registering...' : 'Join the Pack 🐾'}
                    </button>
                </form>
                <p className="auth-link">
                    Already part of our pack? <a href="/login">Login here 🐕</a>
                </p>
            </div>
            {/* Decorative elements */}
            <div className="paw-print paw-print-1">🐾</div>
            <div className="paw-print paw-print-2">🐾</div>
            <div className="paw-print paw-print-3">🐾</div>
        </div>
    );
};

export default Register;