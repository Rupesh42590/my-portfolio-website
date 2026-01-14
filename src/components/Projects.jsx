import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import '../styles/Projects.css';
import vCommChatImg from '../assets/projects/v_comm_chat.png';
import amazonImg from '../assets/projects/amazon_clone.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "V-COMM",
      description: "A comprehensive campus communication app built with Flutter and Firebase. Features include real-time messaging, event management, and attendance tracking.",
      tags: ["Flutter", "Firebase", "Dart"],
      liveLink: "https://drive.google.com/file/d/1vxQsO1nPQpM0nFEaZ-KUxMrgMAXaqTj7/view",
      githubLink: "https://github.com/Rupesh42590/v_comm",
      image: vCommChatImg,
      size: "medium"
    },
    {
      title: "Amazon Clone",
      description: "A fully responsive e-commerce application replicating Amazon's core functionality with search, cart management, and persistent storage.",
      tags: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://ecommerce-website-nine-hazel.vercel.app",
      githubLink: "https://github.com/Rupesh42590/ecommerce-website",
      image: amazonImg,
      size: "medium"
    }
  ];

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section className="section projects-section" id="projects">
      <div className="container projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="bento-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bento-card ${project.size}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="card-image-wrapper">
                <img src={project.image} alt={project.title} className="card-image" />
              </div>
              
              <div className="card-overlay-top">
                <h3 className="card-project-title">{project.title}</h3>
                <div className="card-project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="card-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {/* Project Details Modal - Rendered via Portal */}
      {selectedProject && createPortal(
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            <div className="modal-image-container">
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
              <div className="modal-image-overlay"></div>
            </div>

            <div className="modal-body">
              <div className="modal-header">
                <h3 className="modal-title">{selectedProject.title}</h3>
                <div className="modal-tags">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="modal-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <p className="modal-description">{selectedProject.description}</p>

              <div className="modal-links">
                <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="modal-btn github-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  <span>View Code</span>
                </a>
                <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="modal-btn live-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  <span>{selectedProject.title === "V-COMM" ? "Download APK" : "Live Demo"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Projects;
