import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">${product.price}</p>
        <button
          onClick={() => onAddToCart(product)}
          className="add-to-cart-button"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
