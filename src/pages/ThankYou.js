import React from "react";
import "./ThankYou.css";

function ThankYou() {
  return (
    <div className="thank-you-page">
      <div className="thank-you-box">
        <h1>Thank You! 🎉</h1>
        <p>Your message has been successfully sent.</p>
        <h2>धन्यवाद! 🎊</h2>
        <p>तुमचा संदेश यशस्वीपणे पाठवला गेला आहे.</p>
        <a href="/" className="back-btn">Back to Home</a>
      </div>
    </div>
  );
}

export default ThankYou;
