import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useCareer } from '../context/CareerContext';

// Define types for our hierarchy data
interface NodeData {
  name: string;
  id?: string;
  domain?: string;
  children?: NodeData[];
}

const MindMap: React.FC = () => {
  const { domains, selectedDomain, selectDomain, selectedSubdomain, selectSubdomain } = useCareer();
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || domains.length === 0) return;

    const width = 800;
    const height = 400;
    const svg = d3.select(svgRef.current);
    
    svg.selectAll("*").remove();
    
    // Create a hierarchical structure
    const hierarchyData: NodeData = {
      name: "Career Pathways",
      children: domains.map(domain => ({
        name: domain.name,
        id: domain.id,
        children: domain.subdomains.map(subdomain => ({
          name: subdomain.name,
          id: subdomain.id,
          domain: domain.id
        }))
      }))
    };

    // Create a tree layout
    const treeLayout = d3.tree<NodeData>().size([height - 40, width - 160]);
    
    // Convert the data to a d3 hierarchy
    const root = d3.hierarchy<NodeData>(hierarchyData);
    
    // Generate tree coordinates
    const rootWithLayout = treeLayout(root);
    
    // Create a group element for the entire visualization
    const g = svg.append("g")
      .attr("transform", `translate(80, 20)`);
    
    // Draw links between nodes
    g.selectAll(".link")
      .data(rootWithLayout.links())
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("d", d => {
        return `M${d.source.y || 0},${d.source.x || 0}
                C${((d.source.y || 0) + (d.target.y || 0)) / 2},${d.source.x || 0}
                 ${((d.source.y || 0) + (d.target.y || 0)) / 2},${d.target.x || 0}
                 ${d.target.y || 0},${d.target.x || 0}`;
      })
      .attr("fill", "none")
      .attr("stroke", "#ccc")
      .attr("stroke-width", 1.5);
    
    // Draw the nodes
    const nodes = g.selectAll(".node")
      .data(rootWithLayout.descendants())
      .enter()
      .append("g")
      .attr("class", d => `node ${d.children ? "node--internal" : "node--leaf"}`)
      .attr("transform", d => `translate(${d.y || 0}, ${d.x || 0})`)
      .style("cursor", "pointer")
      .on("click", (event, d) => {
        if (d.data.id) {
          // If it's a domain node
          if (!d.data.domain) {
            selectDomain(d.data.id);
            selectSubdomain(null);
          } else {
            // If it's a subdomain node
            selectDomain(d.data.domain);
            selectSubdomain(d.data.id);
          }
        } else {
          // If it's the root node
          selectDomain(null);
          selectSubdomain(null);
        }
      });
    
    // Add circles to nodes
    nodes.append("circle")
      .attr("r", d => d.depth === 0 ? 10 : d.depth === 1 ? 8 : 6)
      .attr("fill", d => {
        if (d.depth === 0) return "#ff7f0e";
        if (d.depth === 1) {
          return d.data.id === selectedDomain?.id ? "#1f77b4" : "#aec7e8";
        }
        return d.data.id === selectedSubdomain?.id ? "#2ca02c" : "#98df8a";
      });
    
    // Add text labels to nodes
    nodes.append("text")
      .attr("dy", d => d.depth === 0 ? -15 : d.children ? -10 : 15)
      .attr("x", d => d.depth === 0 ? 0 : d.children ? -8 : 8)
      .attr("text-anchor", d => d.depth === 0 ? "middle" : d.children ? "end" : "start")
      .text(d => d.data.name)
      .style("font-size", "12px")
      .style("fill", "#333");
    
  }, [domains, selectedDomain, selectedSubdomain, selectDomain, selectSubdomain]);

  return (
    <div className="mindmap-visualization">
      <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet" />
    </div>
  );
};

export default MindMap; 