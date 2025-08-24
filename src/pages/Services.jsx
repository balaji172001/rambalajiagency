import React from 'react';
import ServicesGrid from '../components/ServicesGrid';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="services-page">
      <div className="page-header">
        <div className="container">
          <h1>🌟 Our Premium Services 🌟</h1>
          <p>Professional solutions for your business needs</p>
          <div className="discount-banner-small">
            <span>🎉 All services at 50% discount! 🎉</span>
          </div>
        </div>
      </div>
      
      <ServicesGrid />
      
      <div className="services-details">
        <div className="container">
          <h2>🎊 Why Our Services Are Special 🎊</h2>
          <div className="details-grid">
            <div className="detail-card">
              <div className="detail-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Quick turnaround time for all projects</p>
            </div>
            <div className="detail-card">
              <div className="detail-icon">💎</div>
              <h3>Premium Quality</h3>
              <p>High-quality solutions that exceed expectations</p>
            </div>
            <div className="detail-card">
              <div className="detail-icon">🎯</div>
              <h3>Targeted Approach</h3>
              <p>Customized solutions for your specific needs</p>
            </div>
            <div className="detail-card">
              <div className="detail-icon">🏆</div>
              <h3>Award Winning</h3>
              <p>Recognized excellence in service delivery</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;