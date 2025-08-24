import React from 'react';

const About = () => {
  const services = [
    {
      icon: '💼',
      title: 'Business Consulting',
      description: 'Strategic planning and operational excellence to drive your business forward.'
    },
    {
      icon: '📊',
      title: 'Market Analysis',
      description: 'Comprehensive market research and competitive analysis for informed decisions.'
    },
    {
      icon: '🎯',
      title: 'Digital Strategy',
      description: 'Modern digital solutions to enhance your online presence and reach.'
    },
    {
      icon: '📈',
      title: 'Growth Solutions',
      description: 'Scalable strategies designed to accelerate sustainable business growth.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">About Sri rambalaji Agency</h2>
          <p className="section-subtitle">
            Empowering businesses with innovative solutions and strategic insights
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              At Sri rambalaji Agency, we believe in transforming businesses through strategic 
              planning, innovative solutions, and dedicated partnership. With years of experience 
              across diverse industries, we provide the expertise and support your business needs to thrive.
            </p>
            <div className="stats">
              <div className="stat-item">
                <h4>150+</h4>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h4>5+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h4>98%</h4>
                <p>Success Rate</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-icon">🌟</div>
              <p>Excellence in Every Project</p>
            </div>
          </div>
        </div>

        <div id="services" className="services">
          <h3 className="services-title">Our Services</h3>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;