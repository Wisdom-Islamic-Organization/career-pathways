import React from 'react';
import { useCareer } from '../context/CareerContext';

const DomainDetail: React.FC = () => {
  const { selectedDomain, selectSubdomain } = useCareer();

  if (!selectedDomain) {
    return (
      <div className="domain-detail">
        <h2>Welcome to Career Pathways</h2>
        <p>
          This interactive tool helps you explore different career options after
          +2 education. Select a domain from the list to get started.
        </p>
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
              >
                <h3>{subdomain.name}</h3>
                <p>{subdomain.description.substring(0, 80)}...</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>No subdomains available for this career path yet.</p>
      )}
    </div>
  );
};

export default DomainDetail; 