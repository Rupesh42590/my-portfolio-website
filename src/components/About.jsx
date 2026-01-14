import React from 'react';
import '../styles/About.css';
import profilePic from '../assets/profile-pic.JPG'; // Assuming this exists from previous structure

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I'm <span className="highlight">Rupesh</span>! I am a Computer Science student at <span className="highlight">VIT-AP University</span>. 
              I love building apps that make life easier and more organized. Whether I'm working on a mobile app for my campus or a web tool for a business, 
              I enjoy turning complex ideas into clean, user-friendly software.
            </p>

            <p>
              Beyond just writing code, I have a deep passion for <span className="highlight">Cloud Computing</span> and <span className="highlight">AI</span>. 
               The best apps, in my opinion, are not only well-designed but also intelligent, secure, and scalable. This curiosity led me to earn my 
              <span className="highlight"> AWS certifications</span>, helping me bridge the gap between building great features and deploying them on world-class infrastructure.
            </p>
            
            <div className="about-achievement">
              <h3>What I've Been Up To</h3>
              <p>
                <span className="highlight-title">Global Coding:</span> I recently ranked <span className="highlight">10th in the world</span> during a major coding competition 
                called <span className="highlight">TCS CodeVita</span>, which earned me a spot in the Grand Finale.
              </p>
            </div>
          </div>

          <div className="about-img-wrapper">
             <div className="img-container">
                {/* Fallback if image doesn't exist, we'll handle that via error boundary or check */}
                <img src={profilePic} alt="Rupesh Malisetty" className="about-img" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
