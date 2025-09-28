import React, { useState, useEffect } from 'react';

const PHONE_NUMBER = '+916374549935';
const OFFER_END_DATE = '2025-10-20T23:59:59';

const HeroSection = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(OFFER_END_DATE) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const isMobile = () =>
    /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);

  const handleCallClick = () => {
    if (isMobile()) {
      window.location.href = `tel:${PHONE_NUMBER}`;
    } else {
      window.open(`https://web.whatsapp.com/send?phone=${PHONE_NUMBER}`, '_blank');
    }
  };

  return (
    <section className="hero">
      
      <div className="hero-container">
        <div className="hero-content">
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
            <button className="btn-secondary" onClick={handleCallClick}>
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