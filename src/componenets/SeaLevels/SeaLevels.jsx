import React from 'react';
import Graph from './Graph'; // Ensure this is your graph component
import './SeaLevels.css'; // Create a CSS file for styling

const SeaLevel = () => {
  return (
    <div className="sea-level">
      <h1>Rising Sea Levels</h1>
      <p>
        Rising sea levels are caused by two main factors: melting ice sheets and glaciers, 
        and the thermal expansion of seawater as it warms. This phenomenon poses significant 
        risks to coastal communities and ecosystems worldwide.
      </p>
      
      <Graph /> {/* Graph displaying data related to sea levels */}
      
      <div style={{ height: '500px', width: '100%' }}>
    <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/WadD54Ywvz4?si=hGaUdoH5MpB7CmgK" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
    ></iframe>
</div>
      <h2>Reasons</h2>
      <ul>
        <li>Climate Change: Increased greenhouse gas emissions lead to higher temperatures.</li>
        <li>Ice Melt: Glaciers and polar ice caps are melting at an alarming rate.</li>
        <li>Thermal Expansion: Water expands as it warms, contributing to rising sea levels.</li>
      </ul>

      <h2>Solutions</h2>
      <ul>
        <li>Transition to Renewable Energy: Reducing fossil fuel consumption.</li>
        <li>Coastal Defenses: Building barriers and restoring wetlands.</li>
        <li>Policy Changes: Implementing regulations to limit emissions and protect vulnerable areas.</li>
      </ul>
    </div>
  );
};

export default SeaLevel;
