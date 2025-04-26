import React from "react";
import "./HomePage.css"; // Importa los estilos CSS

const HomePage = () => {
  return (
    <div className="home-page">
      <main className="home-main">
        <section className="home-banner">
          <h1>Welcome to My Store</h1>
          <p>Find the best products at the best price.</p>
          <a href="/store" className="home-button">
            Go to Store
          </a>
        </section>
        {/*<section className="featured-products">
          <h2>Featured Products</h2>
        </section>
          <section className="promotions">
          <h2>Promotions</h2>
        </section>*/}
      </main>
      <footer className="home-footer">
        <p>Copyright © 2024 My Store</p>
      </footer>
    </div>
  );
};

export default HomePage;
