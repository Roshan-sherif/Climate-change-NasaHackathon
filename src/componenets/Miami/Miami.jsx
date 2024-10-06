import React from 'react';
import Graph from './graph'; // Ensure this is your graph component
import { Link } from 'react-router-dom';

const ClimateChangeBangkok = () => {
  return (
    <div className="climate-change-bangkok">
      <h1>Climate Change Challenges in Bangkok</h1>
      <p>
        Bangkok is facing numerous challenges due to climate change, including rising sea levels, increased flooding, urban heat, and air pollution. 
        These issues threaten the city's infrastructure, ecosystems, and public health.
      </p>

      <h2>1. Rising Sea Levels</h2>
      <p>
        As global temperatures rise, sea levels are also increasing, posing a significant threat to coastal cities like Bangkok. 
        Projections estimate a rise of up to 1 meter by 2050, heightening the risk of flooding and storm surges.
      </p>
      <Graph type="sea-level" />
      <div className="video-container">
        <iframe 
          src="https://www.youtube.com/embed/your-video-id" // Replace with actual video ID
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>

      <h2>2. Increased Flooding</h2>
      <p>
        More intense rainfall and storms are leading to increased flooding in Bangkok, overwhelming drainage systems. 
        Events like the 2011 floods highlighted vulnerabilities in the city’s infrastructure.
      </p>
      <Graph type="flooding" />

      <h2>3. Urban Heat Islands</h2>
      <p>
        Bangkok experiences elevated temperatures due to urban heat islands, where concrete and asphalt absorb and retain heat. 
        This leads to increased energy consumption and health risks during heatwaves.
      </p>
      <Graph type="heatwaves" />
      
      <h2><Link to="/Bangkok-Pollution">4. Air Pollution</Link></h2>
      <p>
        Air quality in Bangkok suffers from pollution caused by traffic, industrial activities, and construction. 
        This results in health problems such as asthma and respiratory diseases.
      </p>
      <Graph type="pollution" />

      <h2>Images of Climate Impact</h2>
      <div className="image-gallery">
        <img src="https://example.com/flooding-bangkok.jpg" alt="Flooding in Bangkok" />
        <img src="https://example.com/heatwave-bangkok.jpg" alt="Heatwave effects" />
        <img src="https://example.com/pollution-bangkok.jpg" alt="Pollution in Bangkok" />
      </div>

      <h2>Educational Resources</h2>
      <ul>
        <li><a href="https://www.bangkok.go.th/green/index.php" target="_blank" rel="noopener noreferrer">Bangkok Green City</a></li>
        <li><a href="https://www.worldbank.org/en/topic/climatechange/overview" target="_blank" rel="noopener noreferrer">World Bank Climate Change</a></li>
        <li><a href="https://www.unenvironment.org/resources/report/2021-global-environment-outlook" target="_blank" rel="noopener noreferrer">UN Environment Programme</a></li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Climate change poses significant risks to Bangkok, but with proactive measures and community engagement, 
        it is possible to build a more resilient urban environment. 
        Awareness and education are crucial to mitigate these challenges.
      </p>
    </div>
  );
};

export default ClimateChangeBangkok;
