import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">About Sri Rambalaji Agency</h2>
          <p className="section-subtitle">
            Empowering businesses with innovative solutions and strategic insights
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              At Sri Rambalaji Agency, we believe in transforming businesses through strategic 
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
      </div>
    </section>
  );
};

export default About;