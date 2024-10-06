import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip
} from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graph = ({ type }) => {
  const data = {
    labels: [],
    datasets: []
  };

  switch (type) {
    case 'oco2':
      data.labels = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];
      data.datasets = [
        {
          label: 'CO₂ Levels from OCO-2',
          data: [400, 405, 410, 415, 420, 425, 430, 435],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
      ];
      break;
      
    case 'odiac':
      data.labels = ['2000', '2005', '2010', '2015', '2020', '2022'];
      data.datasets = [
        {
          label: 'CO₂ Emissions (ODIAC)',
          data: [350, 360, 370, 390, 400, 410],
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
        },
      ];
      break;

    case 'inverse-modeling':
      data.labels = ['2015', '2016', '2017', '2018', '2019', '2020'];
      data.datasets = [
        {
          label: 'Estimated CO₂ Emissions',
          data: [390, 400, 410, 415, 420, 430],
          backgroundColor: 'rgba(153, 102, 255, 0.6)',
        },
      ];
      break;

    case 'ocean-co2':
      data.labels = ['2010', '2015', '2020', '2025'];
      data.datasets = [
        {
          label: 'Ocean CO₂ Absorption',
          data: [220, 230, 240, 250],
          backgroundColor: 'rgba(255, 206, 86, 0.6)',
        },
      ];
      break;

    case 'ghg-monitoring':
      data.labels = ['2010', '2015', '2020', '2025'];
      data.datasets = [
        {
          label: 'GHG Concentration Levels',
          data: [320, 330, 340, 350],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
      ];
      break;

    default:
      break;
  }

  return (
    <div>
      <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};

export default Graph;
