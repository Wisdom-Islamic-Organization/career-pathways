import React from 'react';
import { useCareer } from '../context/useCareer';
import Breadcrumb from './Breadcrumb';

const Header: React.FC = () => {
  const { selectedDomain, selectedSubdomain, selectDomain, selectSubdomain, selectedEducationLevel, selectEducationLevel } = useCareer();

  const handleGoBack = () => {
    if (selectedEducationLevel) {
      selectEducationLevel(null);
    } else if (selectedSubdomain) {
      selectSubdomain(null);
    } else if (selectedDomain) {
      selectDomain(null);
    }
  };

  const showBackButton = selectedDomain || selectedSubdomain || selectedEducationLevel;

  return (
    <header>
      <div className="container">
        <div className="header-left">
          {showBackButton && (
            <button 
              className="back-button" 
              onClick={handleGoBack}
              aria-label="Go back"
            >
              ← Back
            </button>
          )}
        </div>
      </div>
      
      <div className="container">
        <Breadcrumb />
      </div>
    </header>
  );
};

export default Header; 