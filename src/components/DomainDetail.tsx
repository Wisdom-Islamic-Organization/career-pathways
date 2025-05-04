import React from 'react';
import { useCareer } from '../context/useCareer';

const DomainDetail: React.FC = () => {
  const { selectedDomain, selectSubdomain } = useCareer();

  if (!selectedDomain) {
    return (
      <div className="domain-detail">
        <div className="welcome-card">
          <h2>Welcome to Career Pathways</h2>
          <p>
            This interactive tool helps you explore different career options after
            +2 education. Select a domain from the list or use the mind map to navigate
            through various career paths.
          </p>
          <div className="instructions">
            <h3>How to use this tool</h3>
            <ul>
              <li>Click on a domain to explore available career paths</li>
              <li>Navigate through subdomains to find detailed information</li>
              <li>Use the breadcrumb navigation to go back at any time</li>
              <li>Explore the mind map for a visual representation of career paths</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="domain-detail">
      <h2>{selectedDomain.name}</h2>
      <p>{selectedDomain.description}</p>

      {selectedDomain.subdomains.length > 0 ? (
        <>
          <h3>Explore Subdomains</h3>
          <div className="subdomain-grid">
            {selectedDomain.subdomains.map(subdomain => (
              <div
                key={subdomain.id}
                className="subdomain-card"
                onClick={() => selectSubdomain(subdomain.id)}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${subdomain.name}`}
              >
                <h3>{subdomain.name}</h3>
                <p>{subdomain.description.substring(0, 80)}...</p>
                <div className="card-footer">
                  <span className="explore-link">Explore →</span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="empty-state">
          <p>No subdomains available for this career path yet.</p>
          <p>Please check back later for updates or explore other domains.</p>
        </div>
      )}
    </div>
  );
};

export default DomainDetail; 