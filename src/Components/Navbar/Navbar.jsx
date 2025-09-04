import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // hamburger icons

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (item) => {
    setMenu(item);
    setIsMobileMenuOpen(false); // close menu on mobile after click
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <div onClick={() => handleMenuClick("shop")} className="nav-logo">
        <Link className="nav-logo-link" to="/">
          <img src={logo} alt="Logo" />
          <p>Shopping</p>
        </Link>
      </div>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <li onClick={() => handleMenuClick("shop")}>
          <Link to="/">Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("men")}>
          <Link to="/mens">Mens</Link>
          {menu === "men" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("women")}>
          <Link to="/womens">Womens</Link>
          {menu === "women" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("kids")}>
          <Link to="/kids">Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className="right-side">
        {/* Login & Cart */}
        <div className="nav-login-cart">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/cart">
            <img src={cart_icon} alt="Cart" />
          </Link>
          <div className="nav-cart-count">0</div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu-icon" onClick={handleToggleMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
