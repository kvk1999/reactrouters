// ProductPage.js
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from './CartContext';
import './ProductPage.css';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-page">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => {
          const discount = 0.1; // 10% discount
          const discountedPrice = product.price - (product.price * discount);
          return (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Original Price: <span style={{ textDecoration: 'line-through' }}>${product.price.toFixed(2)}</span></p>
              <p>Discounted Price: ${discountedPrice.toFixed(2)}</p>
              <button onClick={() => addToCart({ ...product, price: discountedPrice })}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductPage;
