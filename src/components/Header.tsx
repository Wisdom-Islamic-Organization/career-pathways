import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCareer } from '../context/CareerContext';
import Breadcrumb from './Breadcrumb';

const Header: React.FC = () => {
  const { selectedDomain, selectedSubdomain, selectDomain, selectSubdomain } = useCareer();
  const location = useLocation();

  const handleGoBack = () => {
    if (selectedSubdomain) {
      selectSubdomain(null);
    } else if (selectedDomain) {
      selectDomain(null);
    }
  };

  const showBackButton = selectedDomain || selectedSubdomain;

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
          <h1>Career Pathways</h1>
        </div>
        
        <nav className="main-nav">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About
          </Link>
        </nav>
      </div>
      
      <div className="container">
        <Breadcrumb />
      </div>
    </header>
  );
};

export default Header; 