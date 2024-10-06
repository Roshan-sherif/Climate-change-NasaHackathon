import React from 'react';
import { Line } from 'react-chartjs-2'; 
const PollutionGraph = ({ type }) => {
  const data = {
    sources: {
      labels: ['Vehicles', 'Industry', 'Construction', 'Residential', 'Others'],
      datasets: [
        {
          label: 'Pollution Sources (%)',
          data: [40, 30, 20, 5, 5],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    },
    'pm25-impact': {
      labels: ['2018', '2019', '2020', '2021', '2022'],
      datasets: [
        {
          label: 'Average PM2.5 Levels (µg/m³)',
          data: [35, 40, 45, 50, 55],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    },
    'air-quality-monitoring': {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Air Quality Index',
          data: [150, 130, 160, 170, 140, 120],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    },
    'reduction-strategies': {
      labels: ['2020', '2021', '2022', '2023', '2024'],
      datasets: [
        {
          label: 'Reduction in Pollution (tonnes)',
          data: [200, 150, 100, 80, 50],
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1,
        },
      ],
    },
  };

  return (
    <div>
      {type === 'sources' && <Line data={data.sources} />}
      {type === 'pm25-impact' && <Line data={data['pm25-impact']} />}
      {type === 'air-quality-monitoring' && <Line data={data['air-quality-monitoring']} />}
      {type === 'reduction-strategies' && <Line data={data['reduction-strategies']} />}
    </div>
  );
};

export default PollutionGraph;
