import { Chart as ChartJS, LinearScale, LineElement, PointElement, Title } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

// Register necessary components
ChartJS.register(LineElement, PointElement, LinearScale, Title);

const Graph = () => {
  // Sample data for Arctic sea ice extent (replace with actual data)
  const data = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        label: 'Arctic Sea Ice Extent (Million sq km)',
        data: [4.6, 4.2, 4.0, 3.9, 4.1, 3.8, 3.7, 3.5],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
        tension: 0.4, // Smoother curve
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Arctic Sea Ice Extent Over Time',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Year',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Extent (Million sq km)',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
