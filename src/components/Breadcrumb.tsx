import React from 'react';
import { useCareer } from '../context/useCareer';
import { Link } from 'react-router-dom';

const Breadcrumb: React.FC = () => {
  const { selectedDomain, selectedSubdomain, selectedEducationLevel, selectDomain, selectSubdomain, selectEducationLevel } = useCareer();

  return (
    <div className="breadcrumb">
      <Link to="/" onClick={(e) => { 
        e.preventDefault();
        selectDomain(null); 
        selectSubdomain(null); 
        selectEducationLevel(null);
      }}>
        Home
      </Link>
      
      {selectedDomain && (
        <>
          <span className="breadcrumb-separator">›</span>
          <Link to="/" onClick={(e) => { 
            e.preventDefault();
            selectSubdomain(null); 
            selectEducationLevel(null);
          }}>
            {selectedDomain.name}
          </Link>
        </>
      )}
      
      {selectedSubdomain && (
        <>
          <span className="breadcrumb-separator">›</span>
          <Link to="/" onClick={(e) => {
            e.preventDefault();
            selectEducationLevel(null);
          }}>
            {selectedSubdomain.name}
          </Link>
        </>
      )}

      {selectedEducationLevel && (
        <>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">{selectedEducationLevel.name}</span>
        </>
      )}
    </div>
  );
};

export default Breadcrumb; 