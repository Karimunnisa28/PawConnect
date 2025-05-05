// src/components/ServiceBooking/BookingConfirmation.js
import React from 'react';
import { Card, Typography, Box, Button, Divider } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const BookingConfirmation = ({ booking, onClose }) => {
  return (
    <Card sx={{ p: 3, textAlign: 'center' }}>
      <Box sx={{ mb: 2 }}>
        <CheckCircleOutlineIcon color="success" sx={{ fontSize: 60 }} />
      </Box>
      <Typography variant="h5" gutterBottom>
        Booking Confirmed!
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Your appointment has been successfully scheduled
      </Typography>
      
      <Box sx={{ my: 3 }}>
        <Divider />
      </Box>

      <Box sx={{ textAlign: 'left', mb: 3 }}>
        <Typography variant="subtitle1">Booking Details:</Typography>
        <Typography>Service: {booking?.service}</Typography>
        <Typography>Date: {booking?.date}</Typography>
        <Typography>Time: {booking?.time}</Typography>
        <Typography>Provider: {booking?.provider}</Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button variant="contained" color="primary" onClick={onClose}>
          Done
        </Button>
        <Button variant="outlined">
          Add to Calendar
        </Button>
      </Box>
    </Card>
  );
};

export default BookingConfirmation;