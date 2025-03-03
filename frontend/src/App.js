import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Add some basic styling

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Welcome to PawConnect</h1>
          <p>Your Pet's Social Network</p>
        </header>
        <main>
          <div className="content">
            <h2>Features Coming Soon:</h2>
            <ul>
              <li>Pet Profiles</li>
              <li>Social Network</li>
              <li>Pet Services</li>
              <li>Adoption Platform</li>
            </ul>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;

