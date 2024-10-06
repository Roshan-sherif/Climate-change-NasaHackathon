import React from 'react';
import './Pollution.css';
import Graph from './PollutionGraph';
const PollutionInBangkok = () => {
  return (
    <div className="pollution-in-bangkok">
      <h1>Air Pollution in Bangkok: Challenges and Solutions</h1>
      <p>
        Welcome to our presentation on the air pollution challenges facing Bangkok. As one of the most populous cities in Southeast Asia,
        Bangkok grapples with significant air quality issues that affect public health and the environment. This presentation examines
        the primary sources of pollution, the implications for residents, and the urgent need for effective strategies to mitigate
        these challenges. Join us as we explore how addressing air pollution is vital for creating a healthier, more sustainable Bangkok
        for current and future residents. Let’s get started!
      </p>

      <h2>Sources of Air Pollution in Bangkok</h2>
      <p>
        Major sources of air pollution in Bangkok include vehicle emissions, industrial activities, and construction dust. Understanding
        these sources is crucial for developing targeted solutions.
      </p>
      <Graph type="sources" />

      <h2>The Impact of PM2.5 on Health</h2>
      <p>
        Fine particulate matter (PM2.5) poses serious health risks, including respiratory and cardiovascular diseases. This section
        explores the health implications of PM2.5 exposure in urban areas.
      </p>
      <Graph type="pm25-impact" />

      <h2>Monitoring Air Quality in Bangkok</h2>
      <p>
        Various organizations and governmental bodies are involved in monitoring air quality in Bangkok. This includes real-time data
        collection and public awareness campaigns to inform residents about pollution levels.
      </p>
      <Graph type="air-quality-monitoring" />

      <h2>Strategies for Reducing Air Pollution</h2>
      <p>
        Effective strategies for reducing air pollution include promoting public transportation, regulating industrial emissions, and
        implementing green spaces. This section will outline ongoing efforts and future plans.
      </p>
      <Graph type="reduction-strategies" />

      <h2>Next Steps</h2>
      <p>
        Upcoming discussions will focus on community engagement and policy measures needed to tackle air pollution effectively.
      </p>
    </div>
  );
};

export default PollutionInBangkok;
