import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if user is logged in
        const token = localStorage.getItem('token');
        if (token) {
            // Verify token and get user data
            axios.get('http://localhost:5001/api/users/me', {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(response => {
                setUser(response.data);
            })
            .catch(() => {
                localStorage.removeItem('token');
            })
            .finally(() => {
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, []);

    const login = async (credentials) => {
        try {
            const response = await axios.post('http://localhost:5001/api/users/login', credentials);
            localStorage.setItem('token', response.data.token);
            setUser(response.data.user);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const register = async (userData) => {
        try {
            const response = await axios.post('http://localhost:5001/api/users/register', userData);
            localStorage.setItem('token', response.data.token);
            setUser(response.data.user);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            login,
            register,
            logout,
            isAuthenticated: !!user
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
