import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Sri rambalaji Agency</h3>
              <p>Your trusted partner for premium business solutions and services.</p>
              <div className="discount-highlight">
                <span>🎉 50% OFF on all services! 🎉</span>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="contact-details">
                <p>📍 329-H/1, Sriviliputtur to Alangulam Road</p>
                <p>Sri Venkateshwara Nagar</p>
                <p>Pilliyarkulam (Post)</p>
                <p>P Ramachandrapuram (PO)-626 137</p>
                <p>Sriviliputtur (TK)</p>
                <p>📞 +91 98765 43210</p>
                <p>✉️ srirambalajiagency@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2024 Sri rambalaji Agency. All rights reserved.</p>
          <p>🎊 Special 50% Discount Offer - Limited Time Only! 🎊</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;