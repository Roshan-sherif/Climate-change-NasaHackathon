import React from 'react';
import { Line } from 'react-chartjs-2';

const Graph = ({ type }) => {
  const data = {
    seaLevel: {
      labels: ['2000', '2005', '2010', '2015', '2020', '2025', '2030'],
      datasets: [
        {
          label: 'Projected Sea Level Rise (meters)',
          data: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 1],
          borderColor: 'blue',
          backgroundColor: 'rgba(0, 0, 255, 0.2)',
          fill: true,
        },
      ],
    },
    flooding: {
      labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017'],
      datasets: [
        {
          label: 'Flood Events in Bangkok',
          data: [15, 10, 20, 5, 30, 25, 35],
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.2)',
          fill: true,
        },
      ],
    },
    heatwaves: {
      labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016'],
      datasets: [
        {
          label: 'Average Temperature Increase (°C)',
          data: [30, 31, 32, 33, 34, 35, 36],
          borderColor: 'orange',
          backgroundColor: 'rgba(255, 165, 0, 0.2)',
          fill: true,
        },
      ],
    },
    pollution: {
      labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
      datasets: [
        {
          label: 'Air Pollution Index',
          data: [150, 160, 170, 180, 190, 200, 210],
          borderColor: 'green',
          backgroundColor: 'rgba(0, 255, 0, 0.2)',
          fill: true,
        },
      ],
    },
  };

  return (
    <div>
      {type === 'sea-level' && <Line data={data.seaLevel} />}
      {type === 'flooding' && <Line data={data.flooding} />}
      {type === 'heatwaves' && <Line data={data.heatwaves} />}
      {type === 'pollution' && <Line data={data.pollution} />}
    </div>
  );
};

export default Graph;
