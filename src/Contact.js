import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      {/* Header + Logo */}
      <div className="contact-header">
        <img src="/NameWithLogo.png" alt="Company Logo" className="contact-logo" />
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Fill out the form or visit us directly.</p>
      </div>

      {/* Form + Info */}
      <div className="contact-grid">
        {/* Left: Form */}
        <div className="contact-left">
          <form
            action="https://formsubmit.co/rajmali3974@gmail.com"
            method="POST"
            onSubmit={() => alert("Message sent successfully!")}
            className="contact-form"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:3002/thank-you"/>
            <input type="text" name="_honey" style={{ display: "none" }} />

            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>

            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>

        {/* Right: Address + Map */}
        <div className="contact-right">
          <h3>Our Office</h3>
          <p><strong>Rthreevision Technologies</strong></p>

          <p><FaMapMarkerAlt className="contact-icon" /> S.No/60/3,ShivaNagari,Bijalinagar Chinchwad, Pune, Maharashtra 411033</p>
          <p><FaPhoneAlt className="contact-icon" /> +91 9270313561</p>
          <p><FaEnvelope className="contact-icon" /> contact@r3visiontech.com</p>

       <div className="map-container">
  <iframe
    title="Office Location"
    src="https://www.google.com/maps?q=S.No/60/3,ShivaNagari,Bijalinagar+Chinchwad,+Pune,+Maharashtra+411033&output=embed"
    width="100%"
    height="250"
    frameBorder="0"
    style={{ border: "1px solid #ccc", borderRadius: "8px" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
