import { Chart as ChartJS, LinearScale, LineElement, PointElement, Title } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

// Register necessary components
ChartJS.register(LineElement, PointElement, LinearScale, Title);

const Graph = () => {
  // Sample data for wildfires (replace with actual data)
  const data = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        label: 'Wildfire Acres Burned',
        data: [900000, 1200000, 2000000, 1500000, 1800000, 4000000, 3000000, 3500000],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
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
        text: 'Wildfire Acres Burned Over Time',
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
          text: 'Acres Burned',
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
