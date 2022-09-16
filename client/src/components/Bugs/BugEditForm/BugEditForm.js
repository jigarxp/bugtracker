import React, { useEffect } from 'react';
import './BugEditForm.scss';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectBug, updateBug, closeEdit } from '../../../features/bugSlice';

const BugEditForm = () => {
  const dispatch = useDispatch();
  const currentBug = useSelector((store) => store.bug.currentBug);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const id = currentBug.id;

    fetch(`/api/tickets/${id}`, {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(updateBug(data.updateBug));
        dispatch(selectBug(data.updateBug));
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    reset();
  }, [currentBug]);

  return (
    <section className="bug-edit-form">
      <div className="bug-edit-content">
        <button onClick={() => dispatch(closeEdit())}>X</button>
        <h2>Edit Bug Ticket</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <input
              type="text"
              id="title"
              defaultValue={currentBug.title}
              {...register('title')}
            />
            <label htmlFor="title">
              <span>Title</span>
            </label>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              id="author"
              required
              {...register('author')}
              defaultValue={currentBug.author}
            />
            <label htmlFor="author">
              <span>Author</span>
            </label>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              id="time"
              required
              {...register('time')}
              defaultValue={currentBug.time}
            />
            <label htmlFor="time">
              <span>Estimated Completion Time (Hours)</span>
            </label>
          </div>
          <div className="text-area-wrapper">
            <label htmlFor="description">
              <span>Description</span>
            </label>
            <textarea
              id="description"
              cols="30"
              rows="10"
              defaultValue={currentBug.description}
              {...register('description')}
            ></textarea>
          </div>
          <div className="select-wrapper">
            <label htmlFor="priority">
              <span>Priority</span>
            </label>
            <select
              id="priority"
              defaultValue={currentBug.priority || 'Normal'}
              {...register('priority')}
            >
              <option value="Low">Low</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>
          <div className="select-wrapper">
            <label htmlFor="status">
              <span>Status</span>
            </label>
            <select
              id="status"
              defaultValue={currentBug.status}
              {...register('status')}
            >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          <button>Edit</button>
        </form>
      </div>
    </section>
  );
};

export default BugEditForm;
