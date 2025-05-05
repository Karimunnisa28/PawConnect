// src/components/ServiceBooking/PaymentProcessor.js
import React, { useState } from 'react';
import { Card, TextField, Button, Grid, Typography } from '@mui/material';

const PaymentProcessor = ({ amount, onSuccess, onError }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Implement payment processing logic here
      console.log('Processing payment:', paymentDetails);
      onSuccess && onSuccess();
    } catch (error) {
      console.error('Payment error:', error);
      onError && onError(error);
    }
  };

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Payment Details
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Card Number"
              value={paymentDetails.cardNumber}
              onChange={(e) => setPaymentDetails({
                ...paymentDetails,
                cardNumber: e.target.value
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Expiry Date"
              placeholder="MM/YY"
              value={paymentDetails.expiryDate}
              onChange={(e) => setPaymentDetails({
                ...paymentDetails,
                expiryDate: e.target.value
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="CVV"
              value={paymentDetails.cvv}
              onChange={(e) => setPaymentDetails({
                ...paymentDetails,
                cvv: e.target.value
              })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name on Card"
              value={paymentDetails.name}
              onChange={(e) => setPaymentDetails({
                ...paymentDetails,
                name: e.target.value
              })}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
            >
              Pay ${amount}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};

export default PaymentProcessor;