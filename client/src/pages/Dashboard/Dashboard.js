import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBug } from '../../features/bugSlice';
import './Dashboard.scss';
import PriorityChart from '../../components/Charts/PriorityChart/PriorityChart.js';
import StatusChart from '../../components/Charts/StatusChart/StatusChart';
import Userchart from '../../components/Charts/UserChart/Userchart';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Dashboard';
  });

  useEffect(() => {
    fetch('/api/tickets')
      .then((res) => res.json())
      .then((data) => dispatch(getBug(data.bugs)))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <main>
        <StatusChart />
        <PriorityChart />
        <Userchart />
      </main>
    </div>
  );
};

export default Dashboard;
