import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(price);
  };

  return (
    <div className="cart">
      <h2>Cart Summary</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>{item.name} - {formatPrice(item.price)}</li>
        ))}
      </ul>
      <p>Total: {formatPrice(totalPrice)}</p>
    </div>
  );
};

export default Cart;

