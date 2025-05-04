import React, { useState, useEffect } from 'react';
import { useCareer } from '../context/useCareer';
import FullScreenMindMap from '../components/FullScreenMindMap';
import EducationLevelList from '../components/EducationLevelList';
import EducationLevelDetail from '../components/EducationLevelDetail';

const MindMapView: React.FC = () => {
  const { selectedDomain, selectedSubdomain, selectedEducationLevel, selectEducationLevel } = useCareer();
  const [showDetail, setShowDetail] = useState(false);

  // Show detail panel when a subdomain is selected
  useEffect(() => {
    if (selectedSubdomain) {
      setShowDetail(true);
    }
  }, [selectedSubdomain]);

  // Reset the detail panel when education level changes
  useEffect(() => {
    if (selectedEducationLevel) {
      setShowDetail(true);
    }
  }, [selectedEducationLevel]);

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
    if (selectedEducationLevel && selectedEducationLevel.type !== 'undergraduate') {
      // Show education level details for postgraduate and advanced levels
      return <EducationLevelDetail level={selectedEducationLevel} />;
    } else if (selectedEducationLevel && selectedEducationLevel.type === 'undergraduate') {
      // For undergraduate, just show the next steps without detail modal
      return <EducationLevelList onSelectLevel={selectEducationLevel} />;
    } else {
      // Show education level selection when no level is selected
      return <EducationLevelList onSelectLevel={selectEducationLevel} />;
    }
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