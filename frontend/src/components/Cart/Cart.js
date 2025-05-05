// src/components/Cart/Cart.js

import React from 'react';
import './Cart.css';
import { useCart } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems = [], removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();

  if (!cartItems) {
    return (
      <div className="cart-container">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <header className="cart-header">
        <button className="back-btn" onClick={() => navigate('/')}>← Back to Shopping</button>
        <h1>Shopping Cart</h1>
      </header>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p className="item-price">${item.price}</p>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button 
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${getCartTotal().toFixed(2)}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;