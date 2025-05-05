import React, { useState, useEffect } from 'react';
import { useCareer } from '../context/useCareer';
import FullScreenMindMap from '../components/FullScreenMindMap';
import EducationLevelList from '../components/EducationLevelList';
import EducationLevelDetail from '../components/EducationLevelDetail';

const MindMapView: React.FC = () => {
  const { selectedDomain, selectedSubdomain, selectedEducationLevel, selectEducationLevel } = useCareer();
  const [showDetail, setShowDetail] = useState(false);

  // Show detail panel when education level changes or when subdomain is selected
  useEffect(() => {
    if (selectedSubdomain || selectedEducationLevel) {
      setShowDetail(true);
    } else {
      setShowDetail(false);
    }
  }, [selectedSubdomain, selectedEducationLevel]);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    if (selectedEducationLevel) {
      selectEducationLevel(null);
    }
  };

  const renderDetailContent = () => {
    if (selectedEducationLevel) {
      // Show education level details
      return <EducationLevelDetail level={selectedEducationLevel} />;
    } else if (selectedSubdomain) {
      // For subdomain, show full SubdomainDetail with career paths
      return (
        <div className="combined-detail">
          <div className="education-levels-section">
            <EducationLevelList onSelectLevel={selectEducationLevel} />
          </div>
        </div>
      );
    }
    
    return null;
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
      
      {showDetail && (
        <div className="detail-overlay" onClick={handleCloseDetail}>
          <div className="detail-container wide-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseDetail}>×</button>
            {renderDetailContent()}
          </div>
        </div>
      )}
    </div>
  );
};

export default MindMapView; 