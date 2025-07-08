import React from "react";
import "./About.css";

function About() {
  return (
    <>
      {/* Section 1: Info */}
      <section className="info-section">
        <div className="info-text">
          <h2>Innovative Software Solutions for You</h2>
          <p>
            At Rthreevision Technologies, we specialize in custom software development,
            application migration, and database migration — ensuring your business stays ahead
            in the ever-evolving tech landscape with scalable, secure, and innovative solutions.
          </p>
        </div>
        <div className="info-img">
          <img src="/pexels-fauxels-3184660.png" alt="Software Solutions" />
        </div>
      </section>

      {/* Section 2: Mission & Vision */}
      <section className="mission-section">
        <h2>Our Mission & Vision</h2>
        <p>
          Our mission is to empower businesses through cutting-edge technology. We aim to be a
          trusted partner in your digital transformation by delivering tailored software
          solutions with exceptional quality and integrity.
        </p>
      </section>

      {/* Section 3: Projects */}
      <section className="project-section">
        <h2>Our Projects</h2>
        <p className="subtitle">Explore our software development and migration portfolio.</p>

        <div className="projects-container">
          <div className="project-card">
            <img src="/pexels-fauxels-3183150.png" alt="Custom Software" />
            <div className="card-content">
              <h3>Custom Software</h3>
              <p>Tailored solutions for unique business challenges and workflows.</p>
            </div>
          </div>

          <div className="project-card">
            <img src="/pexels-fauxels-3184325.png" alt="App Migration" />
            <div className="card-content">
              <h3>Application Migration</h3>
              <p>Seamless modernization of legacy apps to scalable cloud platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="choose-section">
        <h2>Why Choose Rthreevision?</h2>
        <div className="choose-grid">
          <div className="choose-item">
            <h4>🚀 Innovation</h4>
            <p>We adopt modern technologies and agile practices.</p>
          </div>
          <div className="choose-item">
            <h4>🎯 Precision</h4>
            <p>We deliver high-quality, tailored, and tested software.</p>
          </div>
          <div className="choose-item">
            <h4>🤝 Partnership</h4>
            <p>We work as an extension of your team — not just a vendor.</p>
          </div>
          <div className="choose-item">
            <h4>🛡️ Security</h4>
            <p>Data protection and cybersecurity are our top priorities.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
