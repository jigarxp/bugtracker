import React from 'react';
import { Chart } from 'react-google-charts';
import { useSelector } from 'react-redux';
import './StatusChart.scss';

const StatusChart = () => {
  const bugs = useSelector((store) => store.bug.bugList);
  const status = [];
  bugs.forEach((bug) => status.push(bug.status));

  const statusData = [
    ['Tickets', 'Total Tickets'],
    ['Open', status.filter((ele) => ele === 'Open').length],
    ['In Progress', status.filter((ele) => ele === 'In Progress').length],
    ['Closed', status.filter((ele) => ele === 'Closed').length],
  ];

  const statusOptions = {
    // title: 'Tickets by status',
    colors: ['green', 'gold', 'red'],
    is3D: true,
  };

  return (
    <div className="status-chart">
      <h2>Tickets by Status</h2>
      <Chart
        chartType="PieChart"
        data={statusData}
        options={statusOptions}
        width={'600px'}
        height={'300px'}
      />
    </div>
  );
};

export default StatusChart;
