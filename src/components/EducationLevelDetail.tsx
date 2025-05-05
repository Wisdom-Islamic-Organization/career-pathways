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
        
        {education.specializations && education.specializations.length > 0 && (
          <div className="specializations">
            <h4>Specializations</h4>
            <ul>
              {education.specializations.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
        )}
        
        {education.institutions && education.institutions.length > 0 && (
          <div className="institutions">
            <h4>Key Institutions</h4>
            <ul>
              {education.institutions.map((inst, index) => (
                <li key={index}>{inst}</li>
              ))}
            </ul>
          </div>
        )}

        {education.researchAreas && education.researchAreas.length > 0 && (
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
          <p>After completing undergraduate studies, you can pursue postgraduate education for further specialization such as {selectedSubdomain.educationPath.postgraduate.name}.</p>
        </div>
      )}

      {level.type === 'postgraduate' && (
        <div className="next-steps">
          <h3>Next Steps</h3>
          <p>After completing postgraduate studies, you can pursue advanced education for research and expertise such as {selectedSubdomain.educationPath.advanced.name}.</p>
        </div>
      )}
    </div>
  );
};

export default EducationLevelDetail; 