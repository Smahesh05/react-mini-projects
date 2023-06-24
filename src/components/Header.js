import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Mini projects on React for interview </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/color-picker">Color-picker</Link>
        </li>
        <li>
          <Link to="/cart-item">Item-Person-Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
