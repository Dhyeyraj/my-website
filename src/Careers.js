import React from "react";
import "./Careers.css";

function Careers() {
  return (
    <div className="careers-page">
      <div className="careers-header">
        <h1>Join Our Team</h1>
        <p>Be a part of our mission to build great software and nurture talent.</p>
      </div>

      {/* Why Work With Us */}
      <div className="careers-section">
        <h2>Why Work with Us?</h2>
        <ul className="careers-benefits">
          <li>🚀 Work on real client projects</li>
          <li>🎓 Opportunity to mentor and train students</li>
          <li>⏳ Flexible work culture</li>
          <li>📚 Continuous learning environment</li>
          <li>💰 Competitive salary & growth</li>
        </ul>
      </div>

      {/* Current Openings */}
      <div className="careers-section">
        <h2>Current Openings</h2>

        <div className="job-category">
          <h3>🔧 Software Roles</h3>
          <ul>
            <li>Frontend Developer (React.js)</li>
            <li>Backend Developer (ASP.NET Core)</li>
            <li>Full Stack Developer</li>
            <li>UI/UX Designer</li>
          </ul>
        </div>

        <div className="job-category">
          <h3>🎓 Instructor Roles</h3>
          <ul>
            <li>.NET Trainer</li>
            <li>React/JavaScript Trainer</li>
            <li>SQL/Database Trainer</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="careers-cta">
        <h3>Ready to Apply?</h3>
        <p>Email your resume to <strong>hr@r3visiontech.com</strong></p>
        <p>or <a href="https://forms.gle/" target="_blank" rel="noreferrer">fill out this form</a>.</p>
      </div>
    </div>
  );
}

export default Careers;
