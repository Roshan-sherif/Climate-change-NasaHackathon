import React from 'react';
import './Pollution.css';
import Graph from './polutionGraph';

const CO2InNYC = () => {
  return (
    <div className="co2-in-nyc">
      <h1>Rising CO₂ Concentrations in New York City: Challenges and Solutions</h1>
      <p>
        Welcome to our presentation on the increasing concentrations of carbon dioxide (CO₂) in New York City. As one of the
        largest urban centers in the world, New York faces unique challenges as its population and infrastructure continue to
        grow. This presentation will examine the primary sources of CO₂ emissions in the city, the implications for public health
        and the environment, and the urgent need for effective mitigation strategies. Join us as we explore how addressing CO₂
        levels is vital for creating a healthier, more sustainable New York City for current and future residents. Letʼs get started!
      </p>

      <h2>OCO-2: Pioneering Space-Based CO₂ Measurements</h2>
      <p>
        Launched by NASA in July 2014, the Orbiting Carbon Observatory-2 (OCO-2) is the first satellite dedicated to monitoring
        atmospheric carbon dioxide (CO₂) from space. This mission aims to provide high-resolution data on global CO₂ sources
        and sinks.
      </p>
      <Graph type="oco2" />

      <h2>The Open-source Data Inventory for Anthropogenic CO₂ (ODIAC)</h2>
      <p>
        The Open-source Data Inventory for Anthropogenic CO₂ (ODIAC) is a critical resource for understanding fossil fuel
        emissions on a global scale. Developed through a sophisticated model that combines satellite data and power plant
        emissions, ODIAC provides monthly, high-resolution estimates of CO₂ emissions, specifically designed to capture urban
        emission hotspots.
      </p>
      <Graph type="odiac" />

      <h2>Inverse Modeling for CO₂ Emissions Estimation</h2>
      <p>
        Inverse modeling, or "top-down" modeling, estimates annual net carbon dioxide (CO₂) emissions and removals in grams
        of CO₂ per square meter per year (g CO₂/m²/yr). The Top-down CO₂ Budget dataset, created through collaboration
        among over 60 researchers, utilizes data from NASA's OCO-2 mission to analyze CO₂ fluxes.
      </p>
      <Graph type="inverse-modeling" />

      <h2>The ECCO-Darwin Model and Ocean CO₂ Fluxes</h2>
      <p>
        The ocean is a crucial carbon sink, absorbing about 40% of anthropogenic carbon dioxide (CO₂) emissions since the
        industrial era. Understanding how the ocean takes up carbon is complex due to its vastness and dynamic nature.
      </p>
      <Graph type="ocean-co2" />

      <h2>Monitoring Greenhouse Gases in New York City</h2>
      <p>
        The NOAA's Global Greenhouse Gas Reference Network (GGGRN) is essential for monitoring greenhouse gases (GHGs) in urban areas like New York City.
      </p>
      <Graph type="ghg-monitoring" />

      <h2>Next Steps</h2>
      <p>
        Upcoming slides will discuss how NYC can utilize GGGRN data for targeted emissions reduction and long-term climate planning.
      </p>
    </div>
  );
};

export default CO2InNYC;
