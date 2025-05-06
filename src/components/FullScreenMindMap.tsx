import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as d3 from 'd3';
import { useCareer } from '../context/useCareer';
import MindMapControls from './MindMapControls';

// Define types for our hierarchy data
interface NodeData {
  name: string;
  icon?: string;
  id?: string;
  domain?: string;
  children?: NodeData[];
}

interface FullScreenMindMapProps {
  onNodeClick: () => void;
}

const FullScreenMindMap: React.FC<FullScreenMindMapProps> = ({ onNodeClick }) => {
  const { domains, selectedDomain, selectDomain, selectedSubdomain, selectSubdomain } = useCareer();
  const svgRef = useRef<SVGSVGElement>(null);
  const [expandedDomain, setExpandedDomain] = useState<string | null>(null);
  const [scale, setScale] = useState<number>(1);
  const [translate, setTranslate] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState<{ width: number, height: number }>({ width: 0, height: 0 });

  // Simplified handler for domains - just expands the clicked domain
  const handleDomainClick = useCallback((domainId: string) => {
    // If we click on the already expanded domain, collapse it
    if (expandedDomain === domainId) {
      selectDomain(null);
      setExpandedDomain(null);
    } else {
      // Otherwise expand it
      selectDomain(domainId);
      setExpandedDomain(domainId);
    }
    selectSubdomain(null);
  }, [expandedDomain, selectDomain, selectSubdomain]);

  // Separate handler for subdomains - shows details
  const handleSubdomainClick = useCallback((domainId: string, subdomainId: string) => {
    selectDomain(domainId);
    selectSubdomain(subdomainId);
    onNodeClick();
  }, [selectDomain, selectSubdomain, onNodeClick]);

  // Update the expandedDomain state when selectedDomain changes
  useEffect(() => {
    if (!selectedDomain) {
      setExpandedDomain(null);
    } else if (selectedDomain && !expandedDomain) {
      setExpandedDomain(selectedDomain.id);
    }
  }, [selectedDomain, expandedDomain]);

  const handleZoomIn = () => {
    setScale(prevScale => Math.min(prevScale * 1.2, 3));
  };

  const handleZoomOut = () => {
    setScale(prevScale => Math.max(prevScale / 1.2, 0.5));
  };

  const handleReset = () => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  };

  // Add this within the component, where the event handlers are defined
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  // Calculate responsive sizes based on container dimensions
  const calculateResponsiveSizes = useCallback((width: number, height: number) => {
    const minDimension = Math.min(width, height);
    
    return {
      diameter: minDimension * 0.9,
      circleRadius: Math.max(30, minDimension * 0.06),
      clickRadius: Math.max(35, minDimension * 0.07),
      fontSize: {
        icon: minDimension * 0.02 + 'px',
        text: minDimension * 0.012 + 'px'
      },
      lineHeight: Math.max(20, minDimension * 0.04),
      strokeWidth: Math.max(1, minDimension * 0.001)
    };
  }, []);

  useEffect(() => {
    if (!svgRef.current || domains.length === 0) return;

    // Clear previous SVG content
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Get the dimensions of the container
    const containerWidth = svgRef.current.parentElement?.clientWidth || window.innerWidth;
    const containerHeight = svgRef.current.parentElement?.clientHeight || window.innerHeight;
    
    // Update dimensions state
    setDimensions({ width: containerWidth, height: containerHeight });
    
    // Calculate responsive sizes
    const responsiveSizes = calculateResponsiveSizes(containerWidth, containerHeight);
    
    svg
      .attr('width', containerWidth)
      .attr('height', containerHeight);
    
    // Create a group with transformation for zoom behavior
    const g = svg.append("g")
      .attr("transform", `translate(${containerWidth / 2 + translate.x},${containerHeight / 2 + translate.y}) scale(${scale})`);
    
    // Create a hierarchical structure
    let hierarchyData: NodeData;
    
    if (expandedDomain) {
      // If a domain is expanded, show its subdomains
      const domain = domains.find(d => d.id === expandedDomain);
      if (!domain) return;
      
      hierarchyData = {
        name: "Career Pathways",
        children: [{
          name: domain.name,
          icon: domain.icon,
          id: domain.id,
          children: domain.subdomains.map(subdomain => ({
            name: subdomain.name,
            id: subdomain.id,
            domain: domain.id
          }))
        }]
      };
    } else {
      // Otherwise just show the main domains
      hierarchyData = {
        name: "Career Pathways",
        children: domains.map(domain => ({
          name: domain.name,
          icon: domain.icon,
          id: domain.id
        }))
      };
    }

    // Use responsive diameter
    const diameter = responsiveSizes.diameter;
    const radius = diameter / 2;
    
    // Use a radial layout for domains with more space
    const tree = d3.cluster<NodeData>()
      .size([360, radius - (containerWidth * 0.07)]); // Responsive spacing
    
    // Convert the data to a d3 hierarchy
    const root = d3.hierarchy<NodeData>(hierarchyData);
    
    // Generate tree coordinates
    const rootWithLayout = tree(root);
    
    // Create a subtle gradient for the links
    const defs = svg.append("defs");
    
    // Create a radial gradient
    const gradient = defs.append("linearGradient")
      .attr("id", "link-gradient")
      .attr("gradientUnits", "userSpaceOnUse");
      
    gradient.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#c5c5c5");
      
    gradient.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#d8d8d8");
    
    // Draw links between nodes with responsive stroke width
    g.selectAll(".link")
      .data(rootWithLayout.links())
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("stroke", "#c5c5c5")
      .attr("stroke-width", responsiveSizes.strokeWidth)
      .attr("opacity", 0.7)
      .attr("d", (d) => {
        // Get source and target coordinates
        const sx = Math.cos((d.source.x! - 90) * (Math.PI / 180)) * d.source.y!;
        const sy = Math.sin((d.source.x! - 90) * (Math.PI / 180)) * d.source.y!;
        const tx = Math.cos((d.target.x! - 90) * (Math.PI / 180)) * d.target.y!;
        const ty = Math.sin((d.target.x! - 90) * (Math.PI / 180)) * d.target.y!;
        
        // Use straight lines for all connections
        return `M${sx},${sy}L${tx},${ty}`;
      });
    
    // Create groups for each node type to manage z-index ordering
    const rootNodeGroup = g.append("g").attr("class", "root-nodes");
    const domainNodeGroup = g.append("g").attr("class", "domain-nodes");
    const subdomainNodeGroup = g.append("g").attr("class", "subdomain-nodes");
    
    // Process nodes by type
    rootWithLayout.descendants().forEach(d => {
      let nodeGroup;
      
      if (d.depth === 0) {
        // Root node
        nodeGroup = rootNodeGroup;
      } else if (d.depth === 1) {
        // Domain node
        nodeGroup = domainNodeGroup;
      } else {
        // Subdomain node
        nodeGroup = subdomainNodeGroup;
      }
      
      // Create the node group
      const node = nodeGroup.append("g")
        .attr("class", () => {
          let classes = "node";
          if (d.depth === 0) {
            classes += " node--root";
          } else if (d.depth === 1) {
            classes += " node--domain";
            if (d.data.id === selectedDomain?.id) {
              classes += " selected";
            }
          } else {
            classes += " node--subdomain";
            if (d.data.id === selectedSubdomain?.id) {
              classes += " selected";
            }
          }
          return classes;
        })
        .attr("transform", () => {
          const x = ((d.x || 0) - 90) * Math.PI / 180;
          const y = d.y || 0;
          return `translate(${y * Math.cos(x)},${y * Math.sin(x)})`;
        });
      
      // Add a larger invisible circle for easier clicking with responsive radius
      node.append("circle")
        .attr("class", "click-area")
        .attr("r", responsiveSizes.clickRadius)
        .attr("fill", "transparent")
        .style("cursor", "pointer")
        .on("click", (event) => {
          event.stopPropagation();
          if (d.depth === 1 && d.data.id) {
            // Domain node
            handleDomainClick(d.data.id);
          } else if (d.depth === 2 && d.data.id && d.data.domain) {
            // Subdomain node
            handleSubdomainClick(d.data.domain, d.data.id);
          }
        });
      
      // Add the visible circle with responsive radius
      node.append("circle")
        .attr("r", responsiveSizes.circleRadius)
        .attr("fill", "white")
        .attr("stroke", "#333")
        .attr("stroke-width", responsiveSizes.strokeWidth)
        .attr("pointer-events", "none");
      
      // Add icon if available with responsive font size
      if (d.data.icon && (d.depth === 0 || d.depth === 1)) {
        node.append("text")
          .attr("class", "icon")
          .attr("text-anchor", "middle")
          .attr("dominant-baseline", "central")
          .attr("text-rendering", "geometricPrecision")
          .style("font-family", "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif")
          .style("font-size", responsiveSizes.fontSize.icon)
          .style("font-weight", "normal")
          .attr("y", -responsiveSizes.circleRadius * 0.25)
          .text(d.data.icon)
          .attr("pointer-events", "none");
      }
      
      // Text handling with responsive font size
      const textGroup = node.append("g")
        .attr("class", "node-text")
        .attr("pointer-events", "none");
      
      // Add the text with line wrapping
      const textElement = textGroup.append("text")
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "central")
        .attr("text-rendering", "geometricPrecision")
        .attr("dy", (d.depth === 0 || d.depth === 1) && d.data.icon ? 
              responsiveSizes.circleRadius * 0.4 + "px" : "0px")
        .style("font-family", "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif")
        .style("font-weight", "bold")
        .style("font-size", responsiveSizes.fontSize.text)
        .style("letter-spacing", "0.2px")
        .attr("fill", "#333");
      
      // Split the text into multiple lines if needed
      const words = d.data.name.split(/\s+/);
      const lines: string[] = [];
      let line = "";
      
      // Calculate max chars based on depth and circle size
      const maxChars = d.depth === 0 ? 
                      Math.ceil(responsiveSizes.circleRadius * 0.7) : 
                      d.depth === 1 ? 
                      Math.ceil(responsiveSizes.circleRadius * 0.6) : 
                      Math.ceil(responsiveSizes.circleRadius * 0.5);
      
      words.forEach(word => {
        const testLine = line.length === 0 ? word : line + " " + word;
        
        if (testLine.length <= maxChars) {
          line = testLine;
        } else {
          lines.push(line);
          line = word;
        }
      });
      
      if (line.length > 0) {
        lines.push(line);
      }
      
      // Add each line of text with responsive line height
      lines.forEach((lineText, i) => {
        const yPos = (i - (lines.length - 1) / 2) * responsiveSizes.lineHeight;
        
        textElement.append("tspan")
          .attr("x", 0)
          .attr("y", yPos)
          .style("alignment-baseline", "middle")
          .text(lineText);
      });
    });
    
    // Add event listeners for drag functionality for panning
    let dragStartX = 0;
    let dragStartY = 0;
    
    svg.call(
      d3.drag<SVGSVGElement, unknown>()
        .on("start", (event) => {
          dragStartX = event.x - translate.x;
          dragStartY = event.y - translate.y;
        })
        .on("drag", (event) => {
          setTranslate({
            x: event.x - dragStartX,
            y: event.y - dragStartY
          });
        })
    );
    
  }, [domains, selectedDomain, selectedSubdomain, expandedDomain, scale, translate, handleDomainClick, handleSubdomainClick, calculateResponsiveSizes]);
  
  // Move handleResize inside useEffect to fix the dependency warning
  useEffect(() => {
    // Define the resize handler inside the effect to avoid dependency issues
    const handleResize = () => {
      if (svgRef.current && svgRef.current.parentElement) {
        const newWidth = svgRef.current.parentElement.clientWidth;
        const newHeight = svgRef.current.parentElement.clientHeight;
        
        // Only update if dimensions have actually changed
        if (newWidth !== dimensions.width || newHeight !== dimensions.height) {
          setDimensions({ width: newWidth, height: newHeight });
          // Force re-render by modifying state
          setScale(prevScale => prevScale);
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dimensions]); 
  
  return (
    <div
      className="fullscreen-mindmap"
      style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}
      onWheel={handleWheel}
    >
      <svg ref={svgRef} width="100%" height="100%" />
      <MindMapControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />
    </div>
  );
};

export default FullScreenMindMap; 