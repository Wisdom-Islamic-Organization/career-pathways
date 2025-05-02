import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container">
      <div className="domain-detail" style={{ marginTop: '2rem' }}>
        <h2>About Career Pathways</h2>
        <p>
          Career Pathways is an interactive tool designed to help students who have completed
          their +2 education (higher secondary) explore various career options available to them.
        </p>
        
        <h3>Our Mission</h3>
        <p>
          Our mission is to provide clear, concise, and comprehensive information about different
          educational and career paths to help students make informed decisions about their future.
        </p>
        
        <h3>Features</h3>
        <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
          <li>Interactive mind map visualization of various career domains</li>
          <li>Detailed information about educational requirements</li>
          <li>Exploration of career options within each field</li>
          <li>Specialized paths and research areas for advanced studies</li>
        </ul>
        
        <h3>Career Domains</h3>
        <p>
          We cover six main educational domains to provide a comprehensive view of career possibilities:
        </p>
        <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
          <li><strong>Technology:</strong> Computer science, IT, and engineering fields</li>
          <li><strong>Medicine:</strong> Healthcare, medical sciences, and related fields</li>
          <li><strong>Commerce and Management:</strong> Business, finance, and management careers</li>
          <li><strong>Social Science and Humanities:</strong> Psychology, sociology, literature, and more</li>
          <li><strong>Pure Science:</strong> Physics, chemistry, biology, and mathematical sciences</li>
          <li><strong>Abroad Studies:</strong> International education opportunities</li>
        </ul>
        
        <h3>How to Use</h3>
        <p>
          Navigate through the career options by clicking on domains in the left sidebar or interact directly
          with the mind map visualization. Click on subdomains to explore detailed information about educational 
          paths and career options within each field.
        </p>
      </div>
    </div>
  );
};

export default AboutPage; 