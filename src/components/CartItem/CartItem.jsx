import React from "react";
import "./CartItem.css";

const CartItem = ({ item, onUpdateQuantity, onRemoveFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.title}</h3>
        <p className="cart-item-price">${item.price}</p>
        <div className="cart-item-quantity-controls">
          <button
            className="quantity-button"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>
          <span className="quantity">{item.quantity}</span>
          <button
            className="quantity-button"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
        <button
          className="remove-button"
          onClick={() => onRemoveFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
