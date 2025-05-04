import React from 'react';
import { useCareer } from '../context/useCareer';

const SubdomainDetail: React.FC = () => {
  const { selectedDomain, selectedSubdomain } = useCareer();

  if (!selectedSubdomain) {
    return null;
  }

  return (
    <div className="subdomain-detail">
      <div className="subdomain-header">
        <h2>{selectedSubdomain.name}</h2>
        {selectedDomain && (
          <div className="domain-badge">
            {selectedDomain.name}
          </div>
        )}
      </div>
      
      <p>{selectedSubdomain.description}</p>

      <div className="section-card career-options">
        <h3>Career Options</h3>
        <ul className="career-list">
          {selectedSubdomain.careerOptions.map((career, index) => (
            <li key={index}>
              <div className="career-item">{career}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="education-path">
        <h3>Education Path</h3>
        
        <div className="path-section">
          <div className="path-header">
            <h4>{selectedSubdomain.educationPath.undergraduate.name}</h4>
            <div className="duration">
              Duration: {selectedSubdomain.educationPath.undergraduate.duration}
            </div>
          </div>
          
          {selectedSubdomain.educationPath.undergraduate.specializations && (
            <div className="specializations">
              <h5>Specializations</h5>
              <ul>
                {selectedSubdomain.educationPath.undergraduate.specializations.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          )}
          
          {selectedSubdomain.educationPath.undergraduate.institutions && (
            <div className="institutions">
              <h5>Key Institutions</h5>
              <ul>
                {selectedSubdomain.educationPath.undergraduate.institutions.map((inst, index) => (
                  <li key={index}>{inst}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="path-section">
          <div className="path-header">
            <h4>{selectedSubdomain.educationPath.postgraduate.name}</h4>
            <div className="duration">
              Duration: {selectedSubdomain.educationPath.postgraduate.duration}
            </div>
          </div>
          
          {selectedSubdomain.educationPath.postgraduate.specializations && (
            <div className="specializations">
              <h5>Specializations</h5>
              <ul>
                {selectedSubdomain.educationPath.postgraduate.specializations.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="path-section">
          <div className="path-header">
            <h4>{selectedSubdomain.educationPath.advanced.name}</h4>
            <div className="duration">
              Duration: {selectedSubdomain.educationPath.advanced.duration}
            </div>
          </div>
          
          {selectedSubdomain.educationPath.advanced.researchAreas && (
            <div className="research-areas">
              <h5>Research Areas</h5>
              <ul>
                {selectedSubdomain.educationPath.advanced.researchAreas.map((area, index) => (
                  <li key={index}>{area}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubdomainDetail; 