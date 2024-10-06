import React from 'react';
import Graph from './graph'; 
import './bankong.css'; 
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
      <iframe width="656" height="369" src="https://www.youtube.com/embed/sbUPnHFroYI" title="Bangkok&#39;s canal communities: Living on borrowed time before the next flood?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>      </div>

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
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSHoIOflxkyb88iE64nHLShvNal2RvEeTVg&s" alt="Flooding in Bangkok" />
        <img src="https://www.telegraph.co.uk/content/dam/global-health/2024/05/02/TELEMMGLPICT000375916524_17146451753570_trans_NvBQzQNjv4Bq0Z2m9fTZlPCaE9lzDAtkDoX55UGE1-QmdhXTcMmlCx4.jpeg?imwidth=680" alt="Heatwave effects" />
        <img src="https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2023/03/07/2023-02-02T133136Z795611866RC2Y2Z9Z2HX6RTRMADP3THAILAND-POLLUTION_2.JPG?VersionId=tzAtGDHk4nDV7ttlOzVBgnW_nyiBMdq6" alt="Pollution in Bangkok" />
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
