import React, { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>🌟 About Sri rambalaji Agency 🌟</h1>
          <p>Your trusted partner for premium business solutions</p>
          <div className="discount-banner-small">
            <span>🎉 50% OFF on all services! 🎉</span>
          </div>
        </div>
      </div>
      
      <div className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Sri rambalaji Agency has been serving businesses with dedication and excellence. 
                We specialize in providing comprehensive business solutions that help our clients 
                achieve their goals and grow their ventures.
              </p>
              
              <h3>Why Choose Us?</h3>
              <ul className="features-list">
                <li>✅ Expert team with years of experience</li>
                <li>✅ 24/7 customer support</li>
                <li>✅ Affordable pricing with quality service</li>
                <li>✅ Quick turnaround time</li>
                <li>✅ 100% satisfaction guarantee</li>
              </ul>
              
              <div className="stats-section">
                  <AnimatedStat start={100} end={500} duration={100} label="Happy Clients" suffix="+" />
                  <AnimatedStat start={0} end={10} duration={1500} label="Years Experience" suffix="+" />
                  <AnimatedStat start={90} end={99} duration={1500} label="Success Rate" suffix="%" />

              </div>
            </div>
            
            <div className="about-image">
              <div className="image-placeholder">
                <div className="celebration-content">
                  <h3>🎊 Special Offer 🎊</h3>
                  <div className="big-discount">50% OFF</div>
                  <p>On all our premium services!</p>
                  <button className="offer-btn">Claim Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
// AnimatedStat component for count-up animation
// removed duplicate import

// const AnimatedStat = () => {
//   const [count, setCount] = useState(100);
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const ref = useRef();

//   useEffect(() => {
//     const observer = new window.IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated) {
//           setHasAnimated(true);
//         }
//       },
//       { threshold: 0.5 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [hasAnimated]);

//   useEffect(() => {
//     if (!hasAnimated) return;
//     let start = 100;
//     const end = 500;
//     const duration = 2000;
//     const stepTime = Math.max(Math.floor(duration / (end - start)), 10);
//     let current = start;
//     const timer = setInterval(() => {
//       current += 5;
//       if (current >= end) {
//         current = end;
//         clearInterval(timer);
//       }
//       setCount(current);
//     }, stepTime);
//     return () => clearInterval(timer);
//   }, [hasAnimated]);

//   return (
//     <div className="stat-item" ref={ref}>
//       <h3>{count}+</h3>
//       <p>Happy Clients</p>
//     </div>
//   );

// };




const AnimatedStat = ({ start = 0, end, duration = 2000, label, suffix = "" }) => {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let current = start;
    const range = end - start;
    const stepTime = Math.max(Math.floor(duration / range), 10);

    const timer = setInterval(() => {
      current += 1;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setCount(current);
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasAnimated, start, end, duration]);

  return (
    <div className="stat-item" ref={ref}>
      <h3>{count}{suffix}</h3>
      <p>{label}</p>
    </div>
  );
};


