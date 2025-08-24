import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1">🎊</div>
          <div className="shape shape-2">✨</div>
          <div className="shape shape-3">🎉</div>
          <div className="shape shape-4">⭐</div>
          <div className="shape shape-5">🎈</div>
          <div className="shape shape-6">🎁</div>
        </div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="discount-badge">
            <span className="discount-percent">50%</span>
            <span className="discount-text">OFF</span>
          </div>
          
          <h1 className="hero-title">
            Welcome to <span className="brand-name">Sri rambalaji Agency</span>
          </h1>
          
          <p className="hero-subtitle">
            Premium Business Solutions & Services
          </p>
          
          <div className="offer-box">
            <h3>🎉 MEGA DISCOUNT OFFER 🎉</h3>
            <p>Get 50% OFF on all our premium services!</p>
            <div className="countdown-timer">
              <div className="timer-item">
                <span className="timer-number">{timeLeft.days}</span>
                <span className="timer-label">Days</span>
              </div>
              <div className="timer-item">
                <span className="timer-number">{timeLeft.hours}</span>
                <span className="timer-label">Hours</span>
              </div>
              <div className="timer-item">
                <span className="timer-number">{timeLeft.minutes}</span>
                <span className="timer-label">Min</span>
              </div>
              <div className="timer-item">
                <span className="timer-number">{timeLeft.seconds}</span>
                <span className="timer-label">Sec</span>
              </div>
            </div>
          </div>
          
          <div className="hero-buttons">
            <button className="btn-primary pulse">
              🛒 Avail Offer Now
            </button>
            <button className="btn-secondary">
              📞 Call Now
            </button>
          </div>
          
          <div className="contact-info">
            <p>📍 329-H/1, Sriviliputtur to Alangulam Road, Sri Venkateshwara Nagar</p>
            <p>Pilliyarkulam (Post). P Ramachandrapuram (PO)-626 137 Sriviliputtur (TK)</p>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="celebration-box">
            <div className="celebration-icon">🎊</div>
            <h3>Special Celebration Offer!</h3>
            <p>Limited Time Deal</p>
            <div className="price-display">
              <span className="original-price">₹1000</span>
              <span className="discounted-price">₹500</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;