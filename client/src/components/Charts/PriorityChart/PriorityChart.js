import React from 'react';
import { Chart } from 'react-google-charts';
import { useSelector } from 'react-redux';
import './PriorityChart.scss';

const PriorityChart = () => {
  const bugs = useSelector((store) => store.bug.bugList);
  const priority = [];
  bugs.forEach((bug) => priority.push(bug.priority));

  const priorityData = [
    ['Tickets', 'Total Tickets'],
    ['Critical', priority.filter((ele) => ele === 'Critical').length],
    ['High', priority.filter((ele) => ele === 'High').length],
    ['Normal', priority.filter((ele) => ele === 'Normal').length],
    ['Low', priority.filter((ele) => ele === 'Low').length],
  ];

  const priorityOptions = {
    // title: 'Tickets by Priority',
    colors: ['black', 'red', 'green', '#125688'],
    is3D: true,
  };

  return (
    <div className="priority-chart">
      <h2>Tickets by Priority</h2>
      <Chart
        chartType="PieChart"
        data={priorityData}
        options={priorityOptions}
        width={'600px'}
        height={'300px'}
      />
    </div>
  );
};

export default PriorityChart;
