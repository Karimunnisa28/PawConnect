// src/components/ServiceBooking/BookingForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../../contexts/BookingContext';
import './BookingForm.css';

const BookingForm = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useBooking();
  const { selectedService } = state;

  const [formData, setFormData] = useState({
    petName: '',
    date: '',
    time: '',
    notes: ''
  });

  if (!selectedService) {
    navigate('/services');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_BOOKING_DETAILS',
      payload: formData
    });
    navigate('/services/confirmation');
  };

  return (
    <div className="booking-form-container">
      <h2>Book {selectedService.name}</h2>
      
      <div className="service-summary">
        <img src={selectedService.image} alt={selectedService.name} />
        <div className="service-details">
          <h3>{selectedService.name}</h3>
          <p>{selectedService.description}</p>
          <p className="price">{selectedService.price}</p>
          <p className="duration">{selectedService.duration}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label>Pet Name</label>
          <input
            type="text"
            value={formData.petName}
            onChange={(e) => setFormData({...formData, petName: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>Preferred Date</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>Preferred Time</label>
          <input
            type="time"
            value={formData.time}
            onChange={(e) => setFormData({...formData, time: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>Special Notes</label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
          />
        </div>

        <button type="submit" className="submit-button">
          Continue to Confirmation
        </button>
      </form>
    </div>
  );
};

export default BookingForm;