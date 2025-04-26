import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./StorePage.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import CartItem from "../../components/CartItem/CartItem.jsx";
import { CartContext } from "../../context/CartContext";
import { getAllProducts } from "../../services/api";

const StorePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cartItems, addToCart, removeFromCart, updateQuantity, cartTotal } =
    useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="store-page">
      <header className="store-header">
        <h1>Explore our product selection</h1>

        <Link to="/" className="home-button">
          Home
        </Link>
      </header>
      <main className="store-main">
        <section className="product-list">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </section>
        <section className="cart">
          <h2>Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="cart-items">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemoveFromCart={removeFromCart}
                />
              ))}
            </div>
          )}
          <p>Total: ${cartTotal}</p>
          <button className="checkout-button">Checkout</button>
        </section>
      </main>
      <footer className="store-footer">
        <p>Copyright © 2025 My Store</p>
      </footer>
    </div>
  );
};

export default StorePage;
