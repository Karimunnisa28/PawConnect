import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">🐾PawConnect</Link>
      </div>
      <div className="navbar-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/pets">Pets</Link>
        <Link to="/services">Services</Link>
        <Link to="/social">Social</Link>
        <Link to="/adoption">Adoption</Link> {/* Added this */}
        <Link to="/business">Business</Link> {/* Added this */}
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;