// ProductPage.js
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from './CartContext';
import './ProductPage.css';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Check if product is in cart
  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <div className="product-page">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => {
          const discount = 0.1; // 10% discount
          const discountedPrice = product.price - (product.price * discount);

          return (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <h3>{product.title}</h3>
              <p>{product.description.length > 100 ? `${product.description.substring(0, 100)}...` : product.description}</p>
              <p>Original Price: <span style={{ textDecoration: 'line-through' }}>${product.price.toFixed(2)}</span></p>
              <p>Discounted Price: ${discountedPrice.toFixed(2)}</p>
              
              {/* Toggle between "Add to Cart" and "Remove from Cart" */}
              {isInCart(product.id) ? (
                <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
              ) : (
                <button onClick={() => addToCart({ ...product, price: discountedPrice })}>Add to Cart</button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductPage;
