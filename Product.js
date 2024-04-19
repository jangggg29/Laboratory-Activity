import React from 'react';
import './Product.css'; 

const Product = ({ name, description, price, addToCart }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(price);
  };

  return (
    <div className="product">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{formatPrice(price)}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
