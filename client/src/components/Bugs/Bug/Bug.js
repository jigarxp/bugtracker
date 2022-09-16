import React from 'react';
import { useDispatch } from 'react-redux';
import { selectBug, deleteBug } from '../../../features/bugSlice';
import './Bug.scss';

const Bug = ({
  id,
  title,
  description,
  time,
  date,
  priority,
  status,
  author,
}) => {
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    dispatch(
      selectBug({
        id,
        title,
        description,
        time,
        date,
        priority,
        status,
        author,
      })
    );
    e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.add(
      'show_current_bug'
    );
  };

  const handleDelete = (e) => {
    fetch(`/api/tickets/${id}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(deleteBug(data.deleteBug));
        dispatch(selectBug());
      })
      .catch((e) => console.log(e));
  };

  const prioColors = {
    Low: 'blue',
    Normal: 'green',
    High: 'red',
    Critical: 'black',
  };

  const prioColor = prioColors[priority];

  const statusColors = {
    Open: 'green',
    Closed: 'red',
  };

  statusColors['In Progress'] = 'gold';

  const statusColor = statusColors[status];

  return (
    <tr className="bug" onClick={handleSelect}>
      <td>{title}</td>
      <td>
        <div className="statusBG" style={{ backgroundColor: statusColor }}>
          {status}
        </div>
      </td>
      <td>{time}</td>
      <td>{author}</td>
      <td>{new Date(date).toDateString()}</td>
      <td>
        <div className="priorityBG" style={{ backgroundColor: prioColor }}>
          {priority}
        </div>
      </td>
      <td>
        <button onClick={handleDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-trash3-fill"
            viewBox="0 0 16 16"
          >
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default Bug;
