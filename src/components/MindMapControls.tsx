import React from 'react';

interface MindMapControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
}

const MindMapControls: React.FC<MindMapControlsProps> = ({
  onZoomIn,
  onZoomOut,
  onReset
}) => {
  return (
    <div className="mind-map-controls">
      <button 
        className="control-button" 
        onClick={onZoomIn}
        aria-label="Zoom in"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      </button>
      
      <button 
        className="control-button" 
        onClick={onZoomOut}
        aria-label="Zoom out"  
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      </button>
      
      <button 
        className="control-button" 
        onClick={onReset}
        aria-label="Reset view"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      </button>
    </div>
  );
};

export default MindMapControls; 