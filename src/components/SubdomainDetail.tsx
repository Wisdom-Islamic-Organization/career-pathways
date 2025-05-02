import React from 'react';
import { useCareer } from '../context/CareerContext';

const SubdomainDetail: React.FC = () => {
  const { selectedSubdomain } = useCareer();

  if (!selectedSubdomain) {
    return null;
  }

  return (
    <div className="subdomain-detail">
      <h2>{selectedSubdomain.name}</h2>
      <p>{selectedSubdomain.description}</p>

      <div className="career-options">
        <h3>Career Options</h3>
        <ul>
          {selectedSubdomain.careerOptions.map((career, index) => (
            <li key={index}>{career}</li>
          ))}
        </ul>
      </div>

      <div className="education-path">
        <h3>Education Path</h3>
        
        <div className="path-section">
          <h4>{selectedSubdomain.educationPath.undergraduate.name}</h4>
          <div className="duration">
            Duration: {selectedSubdomain.educationPath.undergraduate.duration}
          </div>
          
          {selectedSubdomain.educationPath.undergraduate.specializations && (
            <>
              <h5>Specializations:</h5>
              <ul>
                {selectedSubdomain.educationPath.undergraduate.specializations.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </>
          )}
          
          {selectedSubdomain.educationPath.undergraduate.institutions && (
            <>
              <h5>Key Institutions:</h5>
              <ul>
                {selectedSubdomain.educationPath.undergraduate.institutions.map((inst, index) => (
                  <li key={index}>{inst}</li>
                ))}
              </ul>
            </>
          )}
        </div>
        
        <div className="path-section">
          <h4>{selectedSubdomain.educationPath.postgraduate.name}</h4>
          <div className="duration">
            Duration: {selectedSubdomain.educationPath.postgraduate.duration}
          </div>
          
          {selectedSubdomain.educationPath.postgraduate.specializations && (
            <>
              <h5>Specializations:</h5>
              <ul>
                {selectedSubdomain.educationPath.postgraduate.specializations.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </>
          )}
        </div>
        
        <div className="path-section">
          <h4>{selectedSubdomain.educationPath.advanced.name}</h4>
          <div className="duration">
            Duration: {selectedSubdomain.educationPath.advanced.duration}
          </div>
          
          {selectedSubdomain.educationPath.advanced.researchAreas && (
            <>
              <h5>Research Areas:</h5>
              <ul>
                {selectedSubdomain.educationPath.advanced.researchAreas.map((area, index) => (
                  <li key={index}>{area}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubdomainDetail; 