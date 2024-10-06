import React from 'react';
import Graph from './graph'; // Ensure this is your graph component
import './Wildfires.css'; // Create a CSS file for styling

const Wildfire = () => {
  return (
    <div className="wildfire">
      <h1>Wildfires and Climate Change</h1>
      <p>
        Wildfires have become increasingly frequent and severe due to climate change. Rising temperatures, prolonged droughts, and changing precipitation patterns are contributing factors that exacerbate wildfire risks.
      </p>

      <h2>Reasons for Increased Wildfires</h2>
      <ul>
        <li><strong>Climate Change:</strong> Increased global temperatures lead to drier conditions, making forests more susceptible to ignition.</li>
        <li><strong>Drought:</strong> Extended periods of drought can desiccate vegetation, turning it into fuel for wildfires.</li>
        <li><strong>Land Management Practices:</strong> Insufficient controlled burns and other practices can lead to fuel accumulation.</li>
      </ul>

      <h2>Potential Solutions</h2>
      <ul>
        <li><strong>Improved Forest Management:</strong> Implementing controlled burns and thinning to reduce fuel loads.</li>
        <li><strong>Public Awareness:</strong> Educating communities about fire safety and prevention strategies.</li>
        <li><strong>Policy Changes:</strong> Advocating for legislation that supports sustainable land management practices and funding for firefighting resources.</li>
        <li><strong>Climate Action:</strong> Addressing the root causes of climate change through renewable energy adoption and reducing greenhouse gas emissions.</li>
      </ul>

      <h2>Graph: Wildfire Acres Burned Over Time</h2>
      <Graph /> {/* Graph displaying data related to wildfires */}

      <h2>Educational Video</h2>
      <div className="video-container">
        <iframe 
          src="https://www.youtube.com/embed/l9YO0LBorMg" // Replace with actual video ID
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>

      <h2>Conclusion</h2>
      <p>
        Addressing the challenges posed by wildfires requires a multi-faceted approach. By understanding the causes and implementing effective solutions, we can work towards a more resilient future against the impacts of climate change.
      </p>
    </div>
  );
};

export default Wildfire;
