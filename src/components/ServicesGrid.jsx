import React from 'react';

const ServicesGrid = () => {
  const services = [
    {
      icon: '💼',
      title: 'Business Consulting',
      description: 'Expert business advice and strategic planning',
      originalPrice: '₹2000',
      discountedPrice: '₹1000',
      color: '#FF6B6B'
    },
    {
      icon: '📊',
      title: 'Market Analysis',
      description: 'Comprehensive market research and analysis',
      originalPrice: '₹1500',
      discountedPrice: '₹750',
      color: '#4ECDC4'
    },
    {
      icon: '🎯',
      title: 'Digital Marketing',
      description: 'Complete digital marketing solutions',
      originalPrice: '₹3000',
      discountedPrice: '₹1500',
      color: '#45B7D1'
    },
    {
      icon: '📈',
      title: 'Growth Strategy',
      description: 'Scalable business growth strategies',
      originalPrice: '₹2500',
      discountedPrice: '₹1250',
      color: '#96CEB4'
    },
    {
      icon: '🏢',
      title: 'Corporate Solutions',
      description: 'End-to-end corporate service solutions',
      originalPrice: '₹4000',
      discountedPrice: '₹2000',
      color: '#FFEAA7'
    },
    {
      icon: '💡',
      title: 'Innovation Consulting',
      description: 'Creative solutions for modern challenges',
      originalPrice: '₹1800',
      discountedPrice: '₹900',
      color: '#DDA0DD'
    }
  ];

  return (
    <section className="services-grid-section">
      <div className="container">
        <div className="section-header">
          <h2>🌟 Our Premium Services 🌟</h2>
          <p>All services available at 50% discount for limited time!</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{'--card-color': service.color}}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="price-section">
                <span className="original-price">{service.originalPrice}</span>
                <span className="discounted-price">{service.discountedPrice}</span>
                <div className="discount-badge-small">50% OFF</div>
              </div>
              <button className="service-btn">Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;