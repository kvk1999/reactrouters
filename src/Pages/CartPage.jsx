// CartPage.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './CartPage.css';

function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <p>${product.price.toFixed(2)}</p>
                <label>
                  Quantity:
                  <input 
                    type="number" 
                    value={product.quantity} 
                    onChange={(e) => updateQuantity(product.id, Math.max(1, e.target.value))}
                  />
                </label>
              </div>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          ))}
          <div className="total-price">
            <h3>Total Price: ${getTotalPrice().toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
