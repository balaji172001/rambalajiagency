import React, { useState } from 'react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Discount Banner */}
      <div className="top-banner">
        <div className="banner-content">
          <span className="discount-text">🎉 SPECIAL OFFER - 50% OFF ON ALL SERVICES! 🎉</span>
          <span className="limited-time">Limited Time Only!</span>
        </div>
      </div>

      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Sri rambalaji Agency</h2>
            <span className="tagline">Your Trusted Partner</span>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <button 
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </button>
            <button 
              className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              About Us
            </button>
            <button 
              className={`nav-link ${currentPage === 'services' ? 'active' : ''}`}
              onClick={() => handleNavClick('services')}
            >
              Services
            </button>
            <button 
              className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </button>
             <button 
              className={`nav-link ${currentPage === 'product' ? 'active' : ''}`}
              onClick={() => handleNavClick('product')}
            >
              Product List
            </button>

          </div>

          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;