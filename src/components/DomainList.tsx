import React from 'react';
import { useCareer } from '../context/useCareer';

const DomainList: React.FC = () => {
  const { domains, selectedDomain, selectDomain } = useCareer();

  return (
    <div className="domains-list">
      <h2>Career Domains</h2>
      <ul>
        {domains.map(domain => (
          <li key={domain.id}>
            <a
              href="#"
              className={selectedDomain?.id === domain.id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                selectDomain(domain.id);
              }}
            >
              {domain.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DomainList; 