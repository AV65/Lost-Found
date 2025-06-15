import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <h1>Campus L&amp;F</h1>
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/search" onClick={() => setIsOpen(false)}>Search Items</Link></li>
          <li><Link to="/report-lost" onClick={() => setIsOpen(false)}>Report Lost</Link></li>
          <li><Link to="/report-found" onClick={() => setIsOpen(false)}>Report Found</Link></li>
          <li><Link to="/login" className="highlight" onClick={() => setIsOpen(false)}>Login</Link></li>
          <li><Link to="/register" className="btn" onClick={() => setIsOpen(false)}>Register</Link></li>
        </ul>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
