import React, { useState } from 'react';

const OWNER_WHATSAPP = '+916374549935';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare WhatsApp message
    const message = `New 50% Discount Inquiry:%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${OWNER_WHATSAPP.replace('+', '')}?text=${message}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    // Show snackbar
    setShowSnackbar(true);

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });

    // Hide snackbar after 3 seconds
    setTimeout(() => setShowSnackbar(false), 3000);
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
                <p>+91 9940767763</p>
                <p>+91 9940919857</p>
                <p className="timing">24/7 hours</p>
              </div>
              <div className="info-card">
                <div className="info-icon">✉️</div>
                <h3>Email Us</h3>
                <p>srirambalajiagency@gmail.com</p>
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
      {showSnackbar && (
        <div className="snackbar-success">
          Details sent to owner via WhatsApp!
        </div>
      )}

    </section>
  );
};

export default ContactSection;