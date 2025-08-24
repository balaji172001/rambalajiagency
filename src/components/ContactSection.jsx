import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon with your 50% discount offer.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>🎉 Get Your 50% Discount Now! 🎉</h2>
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">📍</div>
                <h3>Our Location</h3>
                <p>329-H/1, Sriviliputtur to Alangulam Road</p>
                <p>Sri Venkateshwara Nagar</p>
                <p>Pilliyarkulam (Post)</p>
                <p>P Ramachandrapuram (PO)-626 137</p>
                <p>Sriviliputtur (TK)</p>
              </div>
              
              <div className="info-card">
                <div className="info-icon">📞</div>
                <h3>Call Us Now</h3>
                <p>+91 98765 43210</p>
                <p>+91 87654 32109</p>
                <p className="timing">Mon - Sat: 9 AM - 8 PM</p>
              </div>
              
              <div className="info-card">
                <div className="info-icon">✉️</div>
                <h3>Email Us</h3>
                <p>info@srirambalaji-agency.com</p>
                <p>support@srirambalaji-agency.com</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <div className="form-header">
              <h3>🎊 Book Your Service with 50% OFF! 🎊</h3>
              <p>Fill the form below to claim your discount</p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service *</option>
                  <option value="business-consulting">Business Consulting</option>
                  <option value="market-analysis">Market Analysis</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="growth-strategy">Growth Strategy</option>
                  <option value="corporate-solutions">Corporate Solutions</option>
                  <option value="innovation-consulting">Innovation Consulting</option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message or Requirements"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                🎉 Claim 50% Discount Now! 🎉
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;