import React from 'react';
import '../styles/Education.css';

const Education = () => {
  const educationData = [
    {
      institution: "VIT-AP University",
      period: "2022 – Present",
      degree: "B.Tech in Computer Science and Engineering (Core)",
      score: "GPA: 8.78/ 10",
      description: "Focusing on core computer science subjects including Data Structures, Algorithms, Operating Systems, and Database Management Systems."
    },
    {
      institution: "Narayana Junior College",
      period: "2020 – 2022",
      degree: "Maths, Physics, Chemistry (MPC)",
      score: "Percentage: 95.1%",
      description: "Completed intermediate education with a strong foundation in mathematics and sciences."
    }
  ];

  return (
    <section className="section education-section" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-tree">
          {educationData.map((edu, index) => (
            <div key={index} className={`education-node ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="education-content">
                <div className="edu-card-header">
                  <span className="edu-period">{edu.period}</span>
                  <h3 className="edu-institution">{edu.institution}</h3>
                  <h4 className="edu-degree">{edu.degree}</h4>
                </div>
                
                <div className="edu-card-body">
                  <div className="edu-score">{edu.score}</div>
                  <p className="edu-description">{edu.description}</p>
                </div>

                {/* Decorative Background Icon */}
                <div className="edu-icon-bg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l11 6l9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82Z"/></svg>
                </div>
              </div>
              <div className="node-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
