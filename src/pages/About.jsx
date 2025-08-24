import React from 'react';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>🌟 About Sri rambalaji Agency 🌟</h1>
          <p>Your trusted partner for premium business solutions</p>
          <div className="discount-banner-small">
            <span>🎉 50% OFF on all services! 🎉</span>
          </div>
        </div>
      </div>
      
      <div className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Sri rambalaji Agency has been serving businesses with dedication and excellence. 
                We specialize in providing comprehensive business solutions that help our clients 
                achieve their goals and grow their ventures.
              </p>
              
              <h3>Why Choose Us?</h3>
              <ul className="features-list">
                <li>✅ Expert team with years of experience</li>
                <li>✅ Customized solutions for every business</li>
                <li>✅ 24/7 customer support</li>
                <li>✅ Affordable pricing with quality service</li>
                <li>✅ Quick turnaround time</li>
                <li>✅ 100% satisfaction guarantee</li>
              </ul>
              
              <div className="stats-section">
                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Happy Clients</p>
                </div>
                <div className="stat-item">
                  <h3>10+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3>99%</h3>
                  <p>Success Rate</p>
                </div>
              </div>
            </div>
            
            <div className="about-image">
              <div className="image-placeholder">
                <div className="celebration-content">
                  <h3>🎊 Special Offer 🎊</h3>
                  <div className="big-discount">50% OFF</div>
                  <p>On all our premium services!</p>
                  <button className="offer-btn">Claim Now</button>
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

export default About;