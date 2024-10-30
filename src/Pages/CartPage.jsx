// CartPage.jsx
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './CartPage.css';

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, calculateTotal } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                
                {/* Quantity controls */}
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>

                <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total (10% discount applied): ${calculateTotal()}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
