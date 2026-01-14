import React from 'react';
import '../styles/Certifications.css';

const Certifications = () => {


  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      image: "https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
      link: "https://www.credly.com/badges/7a2b09dd-450f-467a-ad59-83c30eecc5ec/public_url" 
    },
    {
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      image: "https://images.credly.com/size/680x680/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png",
      link: "https://www.credly.com/badges/ac00d91c-76a3-4f6c-91b5-3adaadbc8783/public_url"
    },
    {
      title: "Cybersecurity Foundation",
      issuer: "Palo Alto Networks",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/de/PaloAltoNetworks_2020_Logo.svg", 
      link: "https://drive.google.com/file/d/1Bw0TJQh1suoZVc7Z_0jLb_r-XtgrwGJV/view"
    }
  ];

  return (
    <section className="section certifications-section" id="certifications">
      <div className="container certifications-container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <a 
              key={index} 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cert-card"
            >
              <div className="cert-bg-glow"></div>
              <div className="cert-image-wrapper">
                <img src={cert.image} alt={cert.title} className="cert-image" />
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
