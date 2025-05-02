import React from 'react';
import DomainList from '../components/DomainList';
import DomainDetail from '../components/DomainDetail';
import SubdomainDetail from '../components/SubdomainDetail';
import MindMap from '../components/MindMap';
import { useCareer } from '../context/CareerContext';

const HomePage: React.FC = () => {
  const { selectedSubdomain } = useCareer();

  return (
    <div className="container">
      <div className="mindmap-container">
        <DomainList />
        <MindMap />
      </div>
      
      {selectedSubdomain ? <SubdomainDetail /> : <DomainDetail />}
    </div>
  );
};

export default HomePage; 