import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Solutions */}
        <div className="footer-column">
          <h5>Solutions</h5>
          <p>
            Custom software and migration services tailored to your business
            needs.
          </p>
        </div>

        {/* Column 2: Contact Info + Socials */}
        <div className="footer-column">
          <h5>Contact Us</h5>
          <p>
            📞 +91 9270313561
            <br />
            📧 contact@r3visiontech.com
          </p>
  <div className="footer-socials">
  <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
  <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
  <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
  <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
</div>

        </div>

        {/* Column 3: Subscribe Form */}
        <div className="footer-column">
          <h5>Subscribe</h5>
          <form
            action="https://formsubmit.co/rajmali3974@gmail.com"
            method="POST"
            className="footer-form"
          >
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="footer-input"
              required
            />
            <input type="hidden" name="_subject" value="New Subscriber from Footer" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:3002/thank-you" />
            <button type="submit" className="footer-button">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
