import React, { useState, useEffect } from 'react';
import { useCareer } from '../context/CareerContext';
import FullScreenMindMap from '../components/FullScreenMindMap';
import SubdomainDetail from '../components/SubdomainDetail';

const MindMapView: React.FC = () => {
  const { selectedDomain, selectedSubdomain } = useCareer();
  const [showDetail, setShowDetail] = useState(false);

  // Show detail panel when a subdomain is selected
  useEffect(() => {
    if (selectedSubdomain) {
      setShowDetail(true);
    }
  }, [selectedSubdomain]);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  return (
    <div className="mindmap-view">
      <div className="mindmap-title">
        {selectedDomain ? (
          <h2>{selectedDomain.name}</h2>
        ) : (
          <h2>Explore Career Domains</h2>
        )}
        <p>{selectedDomain?.description || "Click on a domain to explore career pathways"}</p>
      </div>
      
      <FullScreenMindMap onNodeClick={toggleDetail} />
      
      {selectedSubdomain && showDetail && (
        <div className="detail-overlay" onClick={handleCloseDetail}>
          <div className="detail-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseDetail}>×</button>
            <SubdomainDetail />
          </div>
        </div>
      )}
    </div>
  );
};

export default MindMapView; 