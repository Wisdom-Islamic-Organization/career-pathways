import React from 'react';
import { useCareer } from '../context/CareerContext';
import { EducationLevel } from '../data/careerPathways';

interface EducationLevelListProps {
  onSelectLevel: (level: EducationLevel) => void;
}

const EducationLevelList: React.FC<EducationLevelListProps> = ({ onSelectLevel }) => {
  const { selectedSubdomain } = useCareer();

  if (!selectedSubdomain) {
    return null;
  }

  // If there are no education levels defined, create them from the educationPath
  const educationLevels = selectedSubdomain.educationLevels || [
    {
      id: 'undergraduate',
      name: selectedSubdomain.educationPath.undergraduate.name,
      description: `A ${selectedSubdomain.educationPath.undergraduate.duration} program focusing on foundational knowledge in ${selectedSubdomain.name}`,
      type: 'undergraduate' as const
    },
    {
      id: 'postgraduate',
      name: selectedSubdomain.educationPath.postgraduate.name,
      description: `A ${selectedSubdomain.educationPath.postgraduate.duration} program for specialization in ${selectedSubdomain.name}`,
      type: 'postgraduate' as const
    },
    {
      id: 'advanced',
      name: selectedSubdomain.educationPath.advanced.name,
      description: `A ${selectedSubdomain.educationPath.advanced.duration} advanced research program in ${selectedSubdomain.name}`,
      type: 'advanced' as const
    }
  ];

  return (
    <div className="education-level-list">
      <div className="level-header">
        <h2 className="section-title">Education Pathways</h2>
        <div className="subdomain-badge">{selectedSubdomain.name}</div>
      </div>
      
      <p className="section-description">
        Select an education level to explore details and career opportunities in {selectedSubdomain.name}
      </p>

      <div className="education-level-grid">
        {educationLevels.map((level) => (
          <div 
            key={level.id}
            className="education-level-card"
            onClick={() => onSelectLevel(level)}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${level.name}`}
          >
            <h3>{level.name}</h3>
            <p>{level.description}</p>
            <div className="card-footer">
              <span className="explore-link">View Details →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationLevelList; 