import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { BookingProvider } from './contexts/BookingContext';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Cart from './components/Cart/Cart';
import axios from 'axios';
import './App.css';

// Import components
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import PetProfiles from './components/pets/PetProfiles';
import Services from './components/services/Services';
import SocialFeed from './components/social/SocialFeed';
import Navbar from './components/common/Navbar';

// Import booking components
import BookingForm from './components/ServiceBooking/BookingForm';
import ServiceCalendar from './components/ServiceBooking/ServiceCalendar';
import PaymentProcessor from './components/ServiceBooking/PaymentProcessor';
import BookingConfirmation from './components/ServiceBooking/BookingConfirmation';

// Import new components
import AdoptionDashboard from './components/Adoption/AdoptionDashboard';
import BusinessDashboard from './components/business/BusinessDashboard';

// Connection Test Component
const ConnectionTest = () => {
  const [status, setStatus] = useState({
    isConnected: false,
    message: 'Checking connection...',
    mongoStatus: 'Unknown'
  });

  const checkConnection = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/test');
      setStatus({
        isConnected: true,
        message: response.data.message,
        mongoStatus: response.data.mongoStatus
      });
    } catch (error) {
      setStatus({
        isConnected: false,
        message: `Connection failed: ${error.message}`,
        mongoStatus: 'Unknown'
      });
    }
  };

  useEffect(() => {
    checkConnection();
    // Check connection every 30 seconds
    const interval = setInterval(checkConnection, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      padding: '10px',
      margin: '10px',
      backgroundColor: status.isConnected ? '#d4edda' : '#f8d7da',
      borderRadius: '5px',
      textAlign: 'center'
    }}>
      <h3>Backend Connection Status</h3>
      <p>Status: {status.message}</p>
      <p>MongoDB: {status.mongoStatus}</p>
      <button 
        onClick={checkConnection}
        style={{
          padding: '5px 10px',
          margin: '5px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer'
        }}
      >
        Test Connection
      </button>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <BookingProvider>
        <CartProvider>
          <Router>
            <div className="app">
              <Navbar />
              <ConnectionTest />
              <main className="main-content">
                <Routes>
                  {/* Redirect root to dashboard */}
                  <Route path="/" element={<Navigate to="/dashboard" replace />} />
                  
                  {/* Auth routes */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />

                  {/* Main routes */}
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/pets" element={<PetProfiles />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/social" element={<SocialFeed />} />

                  {/* Cart route */}
                  <Route path="/cart" element={<Cart />} />

                  {/* Booking routes */}
                  <Route path="/services/book" element={<BookingForm />} />
                  <Route path="/services/calendar" element={<ServiceCalendar />} />
                  <Route path="/services/payment" element={<PaymentProcessor />} />
                  <Route path="/services/confirmation" element={<BookingConfirmation />} />

                  {/* New routes for Adoption and Business */}
                  <Route path="/adoption" element={<AdoptionDashboard />} />
                  <Route path="/business" element={<BusinessDashboard />} />

                  {/* Additional routes */}
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<Privacy />} />
                </Routes>
              </main>

              <footer className="app-footer">
                <div className="footer-content">
                  <div className="footer-section">
                    <h3>About PawConnect</h3>
                    <p>Connecting pets and their humans in a loving community.</p>
                  </div>
                  <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                      <li><Link to="/privacy">Privacy Policy</Link></li>
                      <li><Link to="/adoption">Adoption Center</Link></li>
                      <li><Link to="/business">Business Dashboard</Link></li>
                      <li><Link to="/cart">Shopping Cart</Link></li> {/* Added Cart Link */}
                    </ul>
                  </div>
                  <div className="footer-section">
                    <h3>Connect With Us</h3>
                    <div className="social-links">
                      <a href="https://instagram.com/pawconnect" target="_blank" rel="noopener noreferrer" className="social-link">🐱 Instagram</a>
                      <a href="https://twitter.com/pawconnect" target="_blank" rel="noopener noreferrer" className="social-link">🐦 Twitter</a>
                      <a href="https://facebook.com/pawconnect" target="_blank" rel="noopener noreferrer" className="social-link">🐕 Facebook</a>
                    </div>
                  </div>
                </div>
                <div className="footer-bottom">
                  <p>© 2023 PawConnect. All rights reserved. 🐾</p>
                </div>
              </footer>
            </div>
          </Router>
        </CartProvider>
      </BookingProvider>
    </AuthProvider>
  );
}

// Placeholder components
const About = () => (
  <div className="page-container">
    <h1>About Us</h1>
    <p>PawConnect is dedicated to making pet care accessible and convenient for all pet owners.</p>
  </div>
);

const Contact = () => (
  <div className="page-container">
    <h1>Contact Us</h1>
    <p>Get in touch with us for any questions or concerns.</p>
  </div>
);

const Privacy = () => (
  <div className="page-container">
    <h1>Privacy Policy</h1>
    <p>Your privacy is important to us. Read our privacy policy to learn more.</p>
  </div>
);

export default App;