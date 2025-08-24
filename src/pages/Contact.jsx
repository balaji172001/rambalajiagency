import React from 'react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>📞 Contact Us 📞</h1>
          <p>Get in touch to claim your 50% discount offer!</p>
          <div className="discount-banner-small">
            <span>🎉 Limited time offer - 50% OFF! 🎉</span>
          </div>
        </div>
      </div>
      
      <ContactSection />
      
      <div className="map-section">
        <div className="container">
          <h2>🗺️ Find Us Here 🗺️</h2>
          <div className="location-info">
            <div className="location-card">
              <h3>📍 Our Address</h3>
              <p><strong>Sri rambalaji Agency</strong></p>
              <p>329-H/1, Sriviliputtur to Alangulam Road</p>
              <p>Sri Venkateshwara Nagar</p>
              <p>Pilliyarkulam (Post)</p>
              <p>P Ramachandrapuram (PO)-626 137</p>
              <p>Sriviliputtur (TK)</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="method-icon">📞</span>
                  <span>+91 98765 43210</span>
                </div>
                <div className="contact-method">
                  <span className="method-icon">✉️</span>
                  <span>info@srirambalaji-agency.com</span>
                </div>
                <div className="contact-method">
                  <span className="method-icon">🕒</span>
                  <span>Mon - Sat: 9 AM - 8 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;