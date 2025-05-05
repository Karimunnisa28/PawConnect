// src/contexts/BookingContext.js
import React, { createContext, useContext, useReducer } from 'react';

const BookingContext = createContext();

const initialState = {
  selectedService: null,
  bookingDetails: null,
  bookingStep: 0,
  loading: false,
  error: null
};

const bookingReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_SERVICE':
      return {
        ...state,
        selectedService: action.payload,
        bookingStep: 1
      };
    case 'SET_BOOKING_DETAILS':
      return {
        ...state,
        bookingDetails: action.payload,
        bookingStep: 2
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload
      };
    case 'RESET_BOOKING':
      return initialState;
    default:
      return state;
  }
};

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);
  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};