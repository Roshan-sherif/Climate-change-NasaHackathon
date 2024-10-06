import { Chart as ChartJS, LinearScale, LineElement, PointElement, Title } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

// Register necessary components
ChartJS.register(LineElement, PointElement, LinearScale, Title);

const Graph = ({ type }) => {
  let data;
  let options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: type === 'sea-level' ? 'Projected Sea Level Rise' : type === 'flooding' ? 'Flood Events Over Time' : type === 'heatwaves' ? 'Heatwaves in NYC' : 'Air Pollution Levels',
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
          text: type === 'pollution' ? 'Pollution Index' : 'Value',
        },
        beginAtZero: true,
      },
    },
  };

  // Sample data (replace with actual data)
  switch (type) {
    case 'sea-level':
      data = {
        labels: ['2000', '2005', '2010', '2015', '2020', '2025'],
        datasets: [{
          label: 'Sea Level Rise (inches)',
          data: [0, 2, 4, 6, 8, 10],
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          fill: true,
        }],
      };
      break;
    case 'flooding':
      data = {
        labels: ['2010', '2012', '2014', '2016', '2018', '2020'],
        datasets: [{
          label: 'Flood Events',
          data: [2, 4, 3, 5, 6, 8],
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: true,
        }],
      };
      break;
    case 'heatwaves':
      data = {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
          label: 'Heatwaves (days)',
          data: [10, 15, 20, 25, 30, 35],
          borderColor: 'rgba(255, 206, 86, 1)',
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          fill: true,
        }],
      };
      break;
    case 'pollution':
      data = {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
          label: 'Air Pollution Index',
          data: [50, 55, 60, 65, 70, 75],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
        }],
      };
      break;
    default:
      data = {};
  }

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
