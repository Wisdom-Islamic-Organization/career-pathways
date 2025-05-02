import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <p>© {new Date().getFullYear()} Career Pathways - A guide for +2 students exploring educational and career options</p>
      </div>
    </footer>
  );
};

export default Footer; 