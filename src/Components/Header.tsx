import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link className="logo" to="/">
        Sabzlearn Shop
      </Link>
      <Link to="/cart">
        <AiOutlineShoppingCart className="shop-icon" />
        <span>2</span>
      </Link>
    </header>
  );
}

export default Header;
