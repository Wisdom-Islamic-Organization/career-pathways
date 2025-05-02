import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <h1>Career Pathways</h1>
        <nav>
          <Link to="/" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>
            Home
          </Link>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 