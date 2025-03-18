import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">MyApp</div>
      <div className="nav-right">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
