// src/components/ServiceBooking/ServiceCalendar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../../contexts/BookingContext';
import './ServiceCalendar.css';

const ServiceCalendar = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useBooking();
  const { selectedService } = state;

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  if (!selectedService) {
    navigate('/services');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_BOOKING_DETAILS',
      payload: {
        date: selectedDate,
        time: selectedTime
      }
    });
    navigate('/services/payment');
  };

  return (
    <div className="calendar-container">
      <h2>Schedule {selectedService.name}</h2>
      <div className="booking-calendar">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Select Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>
          <div className="form-group">
            <label>Select Time</label>
            <input
              type="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Continue to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceCalendar;