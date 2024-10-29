// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './Pages/CartContext'; // Corrected file path casing

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
);
