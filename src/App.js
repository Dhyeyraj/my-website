import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Careers from "./Careers";
import Footer from "./Footer";
import ThankYou from "./pages/ThankYou";
import './Nav.css';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu after navigation
  const closeMenu = () => setMenuOpen(false);

  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo-left">
            <Link to="/" onClick={closeMenu}>
              <img src="/NameWithLogo.png" alt="Logo" className="logo-img" />
            </Link>
          </div>

          {/* Hamburger for Mobile */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>

          {/* Nav Links */}
          <div className={`menu-right ${menuOpen ? "show" : ""}`}>
            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
            <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
            <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
            <Link to="/Careers" className="nav-link" onClick={closeMenu}>Careers</Link>
          </div>
        </nav>

        {/* Page content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Careers" element={<Careers />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
