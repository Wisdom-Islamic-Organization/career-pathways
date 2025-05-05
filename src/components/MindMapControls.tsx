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
        +
      </button>
      
      <button 
        className="control-button" 
        onClick={onZoomOut}
        aria-label="Zoom out"  
      >
        -
      </button>
      
      <button 
        className="control-button" 
        onClick={onReset}
        aria-label="Reset view"
      >
        Reset
      </button>
    </div>
  );
};

export default MindMapControls; 