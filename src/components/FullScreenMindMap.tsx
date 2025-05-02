import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { useCareer } from '../context/CareerContext';

// Define types for our hierarchy data
interface NodeData {
  name: string;
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

  // Simplified handler for domains - just expands the clicked domain
  const handleDomainClick = (domainId: string) => {
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
  };

  // Separate handler for subdomains - shows details
  const handleSubdomainClick = (domainId: string, subdomainId: string) => {
    selectDomain(domainId);
    selectSubdomain(subdomainId);
    onNodeClick();
  };

  useEffect(() => {
    if (!svgRef.current || domains.length === 0) return;

    // Clear previous SVG content
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Get the dimensions of the container
    const containerWidth = svgRef.current.parentElement?.clientWidth || window.innerWidth;
    const containerHeight = svgRef.current.parentElement?.clientHeight || window.innerHeight;
    
    svg
      .attr('width', containerWidth)
      .attr('height', containerHeight);
    
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
          id: domain.id
        }))
      };
    }

    // Calculate layout
    const diameter = Math.min(containerWidth, containerHeight) * 0.8; // Slightly smaller for better spacing
    const radius = diameter / 2;
    
    // Use a radial layout for domains
    const tree = d3.cluster<NodeData>()
      .size([360, radius - 140]); // Reduce radius for better spacing
    
    // Convert the data to a d3 hierarchy
    const root = d3.hierarchy<NodeData>(hierarchyData);
    
    // Generate tree coordinates
    const rootWithLayout = tree(root);
    
    // Create a group element for the entire visualization
    const g = svg.append("g")
      .attr("transform", `translate(${containerWidth / 2},${containerHeight / 2})`);
    
    // Create a subtle gradient for the links
    const defs = svg.append("defs");
    
    // Create a radial gradient
    const gradient = defs.append("linearGradient")
      .attr("id", "link-gradient")
      .attr("gradientUnits", "userSpaceOnUse");
      
    gradient.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#c1c8d0");
      
    gradient.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#e8eaed");
    
    // Draw links between nodes with better curves
    g.selectAll(".link")
      .data(rootWithLayout.links())
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("stroke", "url(#link-gradient)")
      .attr("d", (d) => {
        // Get source and target coordinates
        const sx = Math.cos((d.source.x! - 90) * (Math.PI / 180)) * d.source.y!;
        const sy = Math.sin((d.source.x! - 90) * (Math.PI / 180)) * d.source.y!;
        const tx = Math.cos((d.target.x! - 90) * (Math.PI / 180)) * d.target.y!;
        const ty = Math.sin((d.target.x! - 90) * (Math.PI / 180)) * d.target.y!;
        
        // Update gradient coordinates for this specific link
        gradient.attr("x1", sx).attr("y1", sy).attr("x2", tx).attr("y2", ty);
        
        if (d.source.depth === 0) {
          // For links from root, use straight lines
          return `M${sx},${sy}L${tx},${ty}`;
        } else {
          // For other links, use curved lines
          // Calculate control points for a subtle curve
          const midX = (sx + tx) / 2;
          const midY = (sy + ty) / 2;
          
          // Calculate curve based on distance
          const dx = tx - sx;
          const dy = ty - sy;
          const angle = Math.atan2(dy, dx) - Math.PI / 2;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Calculate curve control point - more subtle
          const offset = distance * 0.1; // Even more subtle curve
          const cpx = midX + Math.cos(angle) * offset;
          const cpy = midY + Math.sin(angle) * offset;
          
          return `M${sx},${sy}Q${cpx},${cpy} ${tx},${ty}`;
        }
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
      
      // Add a larger invisible circle for easier clicking
      node.append("circle")
        .attr("class", "click-area")
        .attr("r", d.depth === 0 ? 40 : d.depth === 1 ? 35 : 25)
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
      
      // Add the visible circle - slightly smaller for cleaner look
      node.append("circle")
        .attr("class", "visible-circle")
        .attr("r", d.depth === 0 ? 30 : d.depth === 1 ? 24 : 18)
        .attr("pointer-events", "none");
      
      // Add a simpler text label
      const text = node.append("g")
        .attr("class", "node-text")
        .attr("pointer-events", "none");
      
      // Add background for text - simpler, cleaner style
      const bg = text.append("rect")
        .attr("fill", "white")
        .attr("opacity", 0.95)
        .attr("rx", 4)
        .attr("ry", 4)
        .attr("x", -60)
        .attr("y", d.depth === 0 ? 38 : d.depth === 1 ? 32 : 24)
        .attr("width", 120)
        .attr("height", 24);
      
      // Add text - cleaner font
      const textElement = text.append("text")
        .attr("text-anchor", "middle")
        .attr("y", d.depth === 0 ? 55 : d.depth === 1 ? 48 : 40)
        .attr("font-size", d.depth === 0 ? 14 : d.depth === 1 ? 13 : 12)
        .attr("font-weight", d.depth === 0 ? 600 : 500)
        .attr("fill", "#202124");
      
      // Handle text wrapping for cleaner layout
      let name = d.data.name;
      if (name.length > 20) {
        // For long names, truncate with ellipsis for cleaner look
        name = name.substring(0, 18) + "...";
        textElement.append("tspan")
          .attr("x", 0)
          .text(name);
      } else if (name.length > 15 && name.includes(" ")) {
        // For medium names with spaces, wrap at a space
        const spaceIndex = name.lastIndexOf(" ", 15);
        const firstLine = name.substring(0, spaceIndex);
        const secondLine = name.substring(spaceIndex + 1);
        
        textElement.append("tspan")
          .attr("x", 0)
          .text(firstLine);
        
        textElement.append("tspan")
          .attr("x", 0)
          .attr("dy", "1.2em")
          .text(secondLine);
          
        bg.attr("height", 40)
          .attr("y", (d.depth === 0 ? 38 : d.depth === 1 ? 32 : 24) - 8);
      } else {
        // For short names, keep as is
        textElement.append("tspan")
          .attr("x", 0)
          .text(name);
      }
    });
    
    // Add click handling for the background to collapse
    svg.on("click", () => {
      if (expandedDomain) {
        selectDomain(null);
        setExpandedDomain(null);
        selectSubdomain(null);
      }
    });

    // Handle window resize
    const handleResize = () => {
      if (svgRef.current) {
        const newWidth = svgRef.current.parentElement?.clientWidth || window.innerWidth;
        const newHeight = svgRef.current.parentElement?.clientHeight || window.innerHeight;
        
        svg
          .attr('width', newWidth)
          .attr('height', newHeight);
          
        g.attr("transform", `translate(${newWidth / 2},${newHeight / 2})`);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [domains, selectedDomain, selectedSubdomain, expandedDomain, onNodeClick, selectDomain, selectSubdomain]);

  return (
    <div className="fullscreen-mindmap">
      <svg ref={svgRef} />
    </div>
  );
};

export default FullScreenMindMap; 