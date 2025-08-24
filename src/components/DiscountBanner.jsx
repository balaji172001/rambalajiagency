import React, { useState, useEffect } from 'react';

const DiscountBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 30,
    seconds: 45
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

  if (!isVisible) return null;

  return (
    <div className="discount-banner">
      <button 
        className="banner-close"
        onClick={() => setIsVisible(false)}
      >
        ×
      </button>
      <div className="banner-content">
        <div className="banner-text">
          <h3>🎉 Special Launch Offer - 25% OFF</h3>
          <p>Get premium business consultation services at a discounted rate!</p>
        </div>
        <div className="banner-timer">
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
        <button className="banner-cta">Claim Offer</button>
      </div>
    </div>
  );
};

export default DiscountBanner;