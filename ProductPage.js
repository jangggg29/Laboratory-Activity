import React from 'react';
import Product from './Product';
import './ProductPage.css'; 

const ProductPage = ({ products, addToCart }) => {
  return (
    <div className="product-page">
      {products.map(product => (
        <Product
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          addToCart={() => addToCart(product)}
        />
      ))}
    </div>
  );
};

export default ProductPage;
