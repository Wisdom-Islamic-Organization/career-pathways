import React from 'react';
import Breadcrumb from './Breadcrumb';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <Breadcrumb />
      </div>
    </header>
  );
};

export default Header; 