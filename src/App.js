import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Careers from "./Careers"; // ✅ Corrected
import Footer from "./Footer";
import ThankYou from "./pages/ThankYou";
import './Nav.css';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo-left">
            <Link to="/">
              <img src="/NameWithLogo.png" alt="Logo" className="logo-img" />
            </Link>
          </div>
          <div className="menu-right">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/Careers" className="nav-link">Careers</Link>
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

        {/* Sticky Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
