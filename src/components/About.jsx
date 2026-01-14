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
              Hello! I'm Rupesh, a Computer Science student at <span className="highlight">VIT-AP University</span> with a strong passion for building software.
              I gained a solid foundation in core CS principles and Web Development, consistently maintaining a high GPA.
            </p>
            <p>
              I have hands-on experience developing full-stack applications, from <span className="highlight">campus communication platforms</span> to 
              <span className="highlight">logistics management systems</span>. I love solving real-world problems through code.
            </p>
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
