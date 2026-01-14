import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const scrolled = window.scrollY;
        titleRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
        titleRef.current.style.opacity = 1 - scrolled / 700;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
         <div className="hero-content" ref={titleRef}>
            <span className="hero-overline">Rupesh Malisetty</span>
            <h1 className="hero-title">
              <span className="line-1">Full Stack</span>
              <span className="line-2">Developer</span>
            </h1>
            <p className="hero-intro">
               Building immersive web experiences with a focus on motion and interactivity.
            </p>
            <div className="hero-cta">
               <a href="#projects" className="hero-btn btn-primary">View Work</a>
               <a href="/RESUME.pdf" target="_blank" className="hero-btn btn-secondary">Resume</a>
            </div>
         </div>
         
         <div className="scroll-indicator">
            <span>Scroll</span>
            <div className="line"></div>
         </div>
      </div>
    </section>
  );
};

export default Hero;
