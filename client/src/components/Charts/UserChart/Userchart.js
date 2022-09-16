import React from 'react';
import { useSelector } from 'react-redux';
import './Userchart.scss';

const Userchart = () => {
  const name = useSelector((store) => store.user.user);
  const bugs = useSelector((store) => store.bug.bugList);

  let count = [];
  bugs.forEach((bug) => count.push(bug.author));
  count = count.filter((bug) => bug === name).length;

  return (
    <div className="user-chart">
      <h3>Tickets Assigned to User</h3>
      <p>{count}</p>
    </div>
  );
};

export default Userchart;
