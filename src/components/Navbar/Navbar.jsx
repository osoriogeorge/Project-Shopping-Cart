import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="logo">
          My Store
        </Link>
      </div>
      <div className="navbar-menu">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/store" className="nav-link">
              Store
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
