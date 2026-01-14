import React from 'react';
import '../styles/About.css';
import profilePic from '../assets/profile-pic.jpg';

const About = () => {
  const skills = [
    "React", "JavaScript", "HTML5", "CSS3", "Node.js", 
    "Python", "Java", "Git", "Figma", "UI/UX"
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm <span className="highlight">Rupesh Malisetty</span>, a passionate 
              Computer Science student at VIT-AP University. I enjoy creating 
              beautiful and functional digital experiences.
            </p>
            <p>
              With a strong foundation in core CS subjects and a keen eye for design, 
              I strive to build applications that are not only efficient but also 
              visually engaging. I'm constantly learning new technologies to improve 
              my craft.
            </p>
            
            <div className="skills-marquee-wrapper">
              <div className="skills-track">
                {skills.concat(skills).map((skill, index) => (
                  <span key={index} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="about-img-wrapper">
            <div className="img-container">
              <img src={profilePic} alt="Profile" className="about-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
