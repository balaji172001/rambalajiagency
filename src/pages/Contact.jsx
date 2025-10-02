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
          <div className="location-info location-map-flex">
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
                  <span className='method-detaails'>+91 9940767763</span>
                </div>
                <div className="contact-method">
                  <span className="method-icon">✉️</span>
                  <span className='method-detaails'>srirambalajiagency@gmail.com</span>
                </div>
                <div className="contact-method">
                  <span className="method-icon">🕒</span>
                  <span className='method-detaails'>24/7 hours</span>
                </div>
              </div>
            </div>
            <div className="location-map-embed">
              <iframe
                title="Sri rambalaji Agency Location"
                src="https://www.google.com/maps?q=329-H/1,+Sriviliputtur+to+Alangulam+Road,+Sriviliputtur,+Tamil+Nadu&output=embed"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '16px', minWidth: '250px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;