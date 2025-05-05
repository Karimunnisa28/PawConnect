// src/components/business/BusinessDashboard.js
import React, { useState } from 'react';
import Appointments from './Appointments';
import Inventory from './Inventory';
import Analytics from './Analytics';
import CustomerManagement from './CustomerManagement';
import './Business.css';

const BusinessDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const businessMetrics = {
    revenue: {
      daily: 1200,
      weekly: 8400,
      monthly: 32000,
      yearToDate: 280000
    },
    appointments: {
      today: 8,
      upcoming: 15,
      completed: 156,
      cancelled: 3
    },
    inventory: {
      totalItems: 234,
      lowStock: 12,
      outOfStock: 5,
      value: 15600
    },
    customers: {
      total: 450,
      new: 28,
      returning: 422,
      vip: 45
    }
  };

  return (
    <div className="business-dashboard">
      <header className="dashboard-header">
        <h1>Business Dashboard</h1>
        <nav className="dashboard-nav">
          <button 
            className={`nav-button ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`nav-button ${activeTab === 'appointments' ? 'active' : ''}`}
            onClick={() => setActiveTab('appointments')}
          >
            Appointments
          </button>
          <button 
            className={`nav-button ${activeTab === 'inventory' ? 'active' : ''}`}
            onClick={() => setActiveTab('inventory')}
          >
            Inventory
          </button>
          <button 
            className={`nav-button ${activeTab === 'customers' ? 'active' : ''}`}
            onClick={() => setActiveTab('customers')}
          >
            Customers
          </button>
          <button 
            className={`nav-button ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            Analytics
          </button>
        </nav>
      </header>

      <main className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="overview-grid">
            <div className="metric-card revenue">
              <h3>Revenue</h3>
              <div className="metric-details">
                <div className="metric-item">
                  <span>Today</span>
                  <span>${businessMetrics.revenue.daily}</span>
                </div>
                <div className="metric-item">
                  <span>This Week</span>
                  <span>${businessMetrics.revenue.weekly}</span>
                </div>
                <div className="metric-item">
                  <span>This Month</span>
                  <span>${businessMetrics.revenue.monthly}</span>
                </div>
              </div>
            </div>

            <div className="metric-card appointments">
              <h3>Appointments</h3>
              <div className="metric-details">
                <div className="metric-item">
                  <span>Today</span>
                  <span>{businessMetrics.appointments.today}</span>
                </div>
                <div className="metric-item">
                  <span>Upcoming</span>
                  <span>{businessMetrics.appointments.upcoming}</span>
                </div>
                <div className="metric-item">
                  <span>Completed</span>
                  <span>{businessMetrics.appointments.completed}</span>
                </div>
              </div>
            </div>

            <div className="metric-card inventory">
              <h3>Inventory</h3>
              <div className="metric-details">
                <div className="metric-item">
                  <span>Total Items</span>
                  <span>{businessMetrics.inventory.totalItems}</span>
                </div>
                <div className="metric-item warning">
                  <span>Low Stock</span>
                  <span>{businessMetrics.inventory.lowStock}</span>
                </div>
                <div className="metric-item alert">
                  <span>Out of Stock</span>
                  <span>{businessMetrics.inventory.outOfStock}</span>
                </div>
              </div>
            </div>

            <div className="metric-card customers">
              <h3>Customers</h3>
              <div className="metric-details">
                <div className="metric-item">
                  <span>Total</span>
                  <span>{businessMetrics.customers.total}</span>
                </div>
                <div className="metric-item">
                  <span>New This Month</span>
                  <span>{businessMetrics.customers.new}</span>
                </div>
                <div className="metric-item">
                  <span>VIP</span>
                  <span>{businessMetrics.customers.vip}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'appointments' && <Appointments />}
        {activeTab === 'inventory' && <Inventory />}
        {activeTab === 'customers' && <CustomerManagement />}
        {activeTab === 'analytics' && <Analytics />}
      </main>
    </div>
  );
};

export default BusinessDashboard;