import React from 'react';

const ServicesGrid = () => {
  return (
    <section className="services-grid-section">
      <div className="container services-diwali-container">
        <div className="section-header">
          <h2 className="diwali-title">
            🪔 Happy Diwali! 🪔
          </h2>
          <p className="diwali-subtitle">
            Wishing you a sparkling Diwali filled with joy, prosperity, and light!
          </p>
        </div>
        <div className="diwali-flex">
          <div className="diwali-card diwali-card-lamp">
            <div className="diwali-emoji lamp-flicker">
              🪔
            </div>
            <h3 className="diwali-card-title lamp-title">
              Festival of Lights
            </h3>
            <p className="diwali-card-text">
              May your life be as colorful, shimmering and magical as the lights of Diwali!
            </p>
          </div>
          <div className="diwali-card diwali-card-firework">
            <div className="diwali-emoji firework-animate">
              🎆
            </div>
            <h3 className="diwali-card-title firework-title">
              Diwali Fireworks
            </h3>
            <p className="diwali-card-text">
              Celebrate with joy, laughter, and the brilliance of fireworks in the sky!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;