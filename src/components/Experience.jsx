import React, { useState } from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);


  const experiences = [
    {
      company: "LST RGInnotech",
      role: "Software Intern (Remote)",
      period: "Dec 2025 - Present",
      description: [
        "Working on a full stack web application to streamline logistics and service workflows for MSME companies.",
        "Developing and integrating frontend and backend components with structured APIs and database operations.",
        "Focusing on production-ready code practices and optimization."
      ]
    }
  ];

  return (
    <section className="section experience-section" id="experience">
      <div className="container experience-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="experience-tabs-container">
          <div className="tabs-list">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {exp.company}
              </button>
            ))}
          </div>

          <div className="tab-content">
            <div className="job-title">
              <h3>
                {experiences[activeTab].role} 
                <span className="company-name"> @ {experiences[activeTab].company}</span>
              </h3>
              <span className="job-period">{experiences[activeTab].period}</span>
            </div>
            <ul className="job-description">
              {experiences[activeTab].description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
