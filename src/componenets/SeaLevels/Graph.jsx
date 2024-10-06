// src/components/SeaLevels/Graph.jsx
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Title);

const SeaLevelGraph = () => {
  // Data for the graph
  const data = {
    labels: ['1993', '2000', '2010', '2020', '2030', '2040', '2050', '2060', '2070', '2080', '2090', '2100'],
    datasets: [
      {
        label: 'Global Mean Sea Level (mm)',
        data: [0, 25, 50, 91.3, 120, 160, 200, 250, 300, 350, 400, 500], // Example values
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.3,
      }
    ]
  };

  // Options for the graph
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Projected Sea Level Rise',
      },
    },
  };

  return (
    <div>
      <h2>Sea Level Rise Over Time</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default SeaLevelGraph;
