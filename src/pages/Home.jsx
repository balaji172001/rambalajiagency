import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesGrid from '../components/ServicesGrid';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <ServicesGrid />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;