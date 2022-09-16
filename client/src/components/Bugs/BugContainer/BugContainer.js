import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBug } from '../../../features/bugSlice';
import Bug from '../Bug/Bug';
import './BugContainer.scss';
import { openCreate } from '../../../features/bugSlice';

const BugContainer = () => {
  const bugs = useSelector((store) => store.bug.bugList);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/api/tickets')
      .then((res) => res.json())
      .then((data) => dispatch(getBug(data.bugs)))
      .catch((e) => console.log(e));
  }, []);

  return (
    <section className="bug-container">
      <div>
        <h2>Tickets</h2>
        <button onClick={() => dispatch(openCreate())}>
          Create Ticket
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
        </button>
      </div>
      <table className="bug-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Estimated Time (Hours)</th>
            <th>Author</th>
            <th>Date Created</th>
            <th>Priority</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bugs.map((ele) => (
            <Bug
              key={ele._id}
              id={ele._id}
              title={ele.title}
              description={ele.description}
              time={ele.time}
              date={ele.date}
              priority={ele.priority}
              status={ele.status}
              author={ele.author}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default BugContainer;
