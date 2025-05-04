import React from 'react';
import { useCareer } from '../context/useCareer';
import { EducationLevel } from '../data/careerPathways';

interface EducationLevelDetailProps {
  level: EducationLevel;
}

const EducationLevelDetail: React.FC<EducationLevelDetailProps> = ({ level }) => {
  const { selectedSubdomain } = useCareer();

  if (!selectedSubdomain) {
    return null;
  }

  // Get the appropriate education content based on the level type
  const education = 
    level.type === 'undergraduate' 
      ? selectedSubdomain.educationPath.undergraduate
      : level.type === 'postgraduate'
        ? selectedSubdomain.educationPath.postgraduate
        : selectedSubdomain.educationPath.advanced;

  return (
    <div className="education-level-detail">
      <div className="level-header">
        <h2>{level.name}</h2>
        <div className="subdomain-badge">
          {selectedSubdomain.name}
        </div>
      </div>
      
      <p className="level-description">{level.description}</p>

      <div className="section-card education-details">
        <div className="path-header">
          <h3>{education.name}</h3>
          <div className="duration">
            Duration: {education.duration}
          </div>
        </div>
        
        {education.specializations && (
          <div className="specializations">
            <h4>Specializations</h4>
            <ul>
              {education.specializations.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
        )}
        
        {education.institutions && (
          <div className="institutions">
            <h4>Key Institutions</h4>
            <ul>
              {education.institutions.map((inst, index) => (
                <li key={index}>{inst}</li>
              ))}
            </ul>
          </div>
        )}

        {education.researchAreas && (
          <div className="research-areas">
            <h4>Research Areas</h4>
            <ul>
              {education.researchAreas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {level.type === 'undergraduate' && (
        <div className="next-steps">
          <h3>Next Steps</h3>
          <p>After completing undergraduate studies, you can pursue postgraduate education for further specialization.</p>
          <div className="career-preview">
            <h4>Career Preview</h4>
            <p>Entry-level positions that may be available after this stage:</p>
            <ul className="career-list-preview">
              {selectedSubdomain.careerOptions.slice(0, 2).map((career, index) => (
                <li key={index}>{career}</li>
              ))}
              <li>...and more with additional experience</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationLevelDetail; 