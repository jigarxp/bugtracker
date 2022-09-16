import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './BugCurrent.scss';
import { openEdit } from '../../../features/bugSlice';

const BugCurrent = () => {
  const dispatch = useDispatch();
  const currentBug = useSelector((store) => store.bug.currentBug);

  const handleClose = (e) => {
    e.target.parentElement.parentElement.parentElement.classList.remove(
      'show_current_bug'
    );
  };

  const handleEdit = (e) => {
    dispatch(openEdit());
  };

  const prioColors = {
    Low: 'blue',
    Normal: 'green',
    High: 'red',
    Critical: 'black',
  };

  const prioColor = prioColors[currentBug.priority];

  let statusColors = {
    Open: 'green',
    Closed: 'red',
  };

  statusColors['In Progress'] = 'gold';

  const statusColor = statusColors[currentBug.status];

  return (
    <section className="bug-current">
      <div className="header-container">
        <h2>Current Ticket</h2>
        <div className="button-container">
          <button onClick={handleEdit}>
            Edit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            className="bi bi-arrow-down-short arrow-down"
            viewBox="0 0 16 16"
            onClick={handleClose}
          >
            <path
              onClick={handleClose}
              fill-rule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
            />
          </svg>
        </div>
      </div>
      <div className="info-container">
        <div>
          <p>Title</p>
          <p>
            <span>{currentBug.title}</span>
          </p>
        </div>
        <div>
          <p>Author</p>
          <p>{currentBug.author}</p>
        </div>
        <div>
          <p>Description</p>
          <p>{currentBug.description}</p>
        </div>
        <div>
          <p>Status</p>
          <p>
            <div className="statusBG" style={{ backgroundColor: statusColor }}>
              {currentBug.status}
            </div>
          </p>
        </div>
        <div>
          <p>Priority</p>
          <p>
            <div className="priorityBG" style={{ backgroundColor: prioColor }}>
              {currentBug.priority}
            </div>
          </p>
        </div>
        <div>
          <p>Time Estimate (Hours)</p>
          <p>{currentBug.time}</p>
        </div>
      </div>
    </section>
  );
};

export default BugCurrent;
