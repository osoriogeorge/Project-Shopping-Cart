import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import StorePage from "./pages/StorePage/StorePage.jsx";
import { CartProvider } from "./context/CartContext.jsx";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/store" element={<StorePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
