import React from 'react';
import Graph from './graph'; // Ensure this is your graph component
import './MeltingArtic.css'; // Create a CSS file for styling

const MeltingArctic = () => {
  return (
    <div className="melting-arctic">
      <h1>The Melting Arctic</h1>
      <p>
        The Arctic is warming at a rate almost double that of the rest of the planet. 
        This rapid change is causing significant melting of ice sheets and glaciers, leading 
        to rising sea levels and disrupting ecosystems.
      </p>

      <h2>Reasons for Arctic Melting</h2>
      <ul>
        <li><strong>Climate Change:</strong> Increased greenhouse gas emissions are causing global temperatures to rise.</li>
        <li><strong>Albedo Effect:</strong> As ice melts, less sunlight is reflected back into space, leading to further warming.</li>
        <li><strong>Ocean Currents:</strong> Changes in ocean currents affect heat distribution and ice formation.</li>
      </ul>

      <h2>Potential Solutions</h2>
      <ul>
        <li><strong>Reducing Greenhouse Gas Emissions:</strong> Transitioning to renewable energy sources.</li>
        <li><strong>Protecting Marine Ecosystems:</strong> Implementing conservation strategies to protect vulnerable species.</li>
        <li><strong>International Agreements:</strong> Collaborating globally to address climate change through treaties and initiatives.</li>
      </ul>

      <h2>Graph: Arctic Sea Ice Extent Over Time</h2>
      <Graph /> {/* Graph displaying data related to Arctic sea ice extent */}

      <h2>Educational Video</h2>
      <div className="video-container">
        <iframe 
          src="https://www.youtube.com/embed/prACMnIDJ-M" // Replace with actual video ID
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>

      <h2>Conclusion</h2>
      <p>
        Addressing the melting Arctic requires urgent action on multiple fronts. By understanding the causes and implementing effective solutions, we can mitigate the impacts of climate change and protect this vital region.
      </p>
    </div>
  );
};

export default MeltingArctic;
