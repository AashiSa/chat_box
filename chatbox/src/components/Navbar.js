import React from "react";
import "../App.css"; // Ensure styles are applied

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My App</h1>
      <div className="nav-links">
        <a href="/" className="nav-link">Home</a>
      </div>
    </nav>
  );
};

export default Navbar;
