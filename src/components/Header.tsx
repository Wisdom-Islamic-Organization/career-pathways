import React from 'react';
import Breadcrumb from './Breadcrumb';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container header-container">
        <div className="header-logo left-logo">
          <img src="/logo1.png" alt="Left Logo" />
        </div>
        <div className="header-center">
          <Breadcrumb />
        </div>
        <div className="header-logo right-logo">
          <img src="/logo2.png" alt="Right Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header; 