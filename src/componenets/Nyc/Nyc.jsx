import React from 'react';
import Graph from './graph';
import './Nyc.css'; 
import { Link } from 'react-router-dom';

const ClimateChangeNYC = () => {
  return (
    <div className="climate-change-nyc">
      <h1>Climate Change Challenges in New York City</h1>
      <p>
        New York City is facing numerous challenges due to climate change, including rising sea levels, increased flooding, heatwaves, and air pollution. 
        These issues threaten the city's infrastructure, ecosystems, and public health.
      </p>

      <h2>1. Rising Sea Levels</h2>
      <p>
        As global temperatures rise, so do sea levels, posing a significant threat to coastal cities like New York. 
        Projections estimate a rise of 1-2 feet by 2050, increasing the risk of flooding and storm surges.
      </p>
      <Graph type="sea-level" />
      <div className="video-container">
        <iframe 
          src="https://www.youtube.com/embed/gR-AR9ZLoAk" // Replace with actual video ID
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>

      <h2>2. Increased Flooding</h2>
      <p>
        More intense rainfall and storms are leading to increased flooding in NYC, overwhelming drainage systems. 
        Notable events, like Hurricane Sandy, highlighted vulnerabilities in the city’s infrastructure.
      </p>
      <Graph type="flooding" />

      <h2>3. Urban Heat Islands</h2>
      <p>
        NYC experiences elevated temperatures due to urban heat islands, where concrete and asphalt absorb and retain heat. 
        This results in increased energy consumption and health risks during heatwaves.
      </p>
      <Graph type="heatwaves" />
      <h2><Link to="/NewYork-Pollution">4. Air Pollution</Link></h2>
      <p>
        Air quality in NYC suffers from pollution caused by traffic, industrial activities, and construction. 
        This leads to health problems like asthma and cardiovascular diseases.
      </p>
      <Graph type="pollution" />



      <h2>Images of Climate Impact</h2>
      <div className="image-gallery">
        <img src="https://people.com/thmb/uzmpWAnXykajG7czHqa9--HQYBQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/nyc-flooding-tout-092923-b545df73674c445ab1f2593bfebb57b3.jpg" alt="Flooding in NYC" />
        <img src="https://www.nydailynews.com/wp-content/uploads/migration/2023/07/28/IZN4CJ4C4BFPRHEAL66KUYKB2A.jpg" alt="Heatwave effects" />
        <img src="https://media.timeout.com/images/103877022/image.jpg" alt="Pollution in NYC" />
      </div>

      <h2>Educational Resources</h2>
      <ul>
        <li><a href="https://www.nyc.gov/site/sustainability/index.page" target="_blank" rel="noopener noreferrer">NYC Sustainability</a></li>
        <li><a href="https://www.nrdc.org/issues/climate-change" target="_blank" rel="noopener noreferrer">NRDC Climate Change Resources</a></li>
        <li><a href="https://www.epa.gov/climate-change" target="_blank" rel="noopener noreferrer">EPA Climate Change Information</a></li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Climate change poses significant risks to New York City, but with proactive measures and community engagement, 
        it is possible to build a more resilient urban environment. 
        Awareness and education are crucial to mitigate these challenges.
      </p>
    </div>
  );
};

export default ClimateChangeNYC;
