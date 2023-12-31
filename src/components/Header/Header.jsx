import React from "react";
import { categories } from "../helper/data";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-main">
      <h1>Product List</h1>
      <div className="btn-pro">
        {categories.map((item) => (
          <button>{item.toUpperCase()}</button>
        ))}
      </div>
    </div>
  );
};

export default Header;
