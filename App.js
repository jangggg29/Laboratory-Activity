// /src/App.js

import React, { useState } from 'react';
import ProductPage from './ProductPage';
import Cart from './Cart';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Espresso',
      description: 'Strong and concentrated coffee brewed by forcing hot water through finely-ground coffee beans.',
      price: 88.00 
    },

    {
      id: 2,
      name: 'Latte',
      description: 'A coffee drink made with espresso and steamed milk. Topped with a small amount of foam.',
      price: 100.00 
    },

    {
      id: 3,
      name: 'Cappuccino',
      description: 'A coffee drink made with espresso and equal parts steamed milk and foam.',
      price: 113.00 
    },

    {
      id: 4,
      name: 'Americano',
      description: 'A coffee drink prepared by diluting an espresso with hot water.',
      price: 75.00 
    },

  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">
      <h1>Welcome to Coffee Island!</h1>
      <ProductPage products={products} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default App;
