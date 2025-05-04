import React from 'react';
import { useCareer } from '../context/useCareer';
import { Link } from 'react-router-dom';

const Breadcrumb: React.FC = () => {
  const { selectedDomain, selectedSubdomain, selectDomain, selectSubdomain } = useCareer();

  return (
    <div className="breadcrumb">
      <Link to="/" onClick={() => { selectDomain(null); selectSubdomain(null); }}>
        Home
      </Link>
      
      {selectedDomain && (
        <>
          <span className="breadcrumb-separator">›</span>
          <Link to="/" onClick={() => { selectSubdomain(null); }}>
            {selectedDomain.name}
          </Link>
        </>
      )}
      
      {selectedSubdomain && (
        <>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">{selectedSubdomain.name}</span>
        </>
      )}
    </div>
  );
};

export default Breadcrumb; 