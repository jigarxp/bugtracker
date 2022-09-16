import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addBug } from '../../../features/bugSlice';
import './BugAddForm.scss';
import { closeCreate } from '../../../features/bugSlice';

const BugForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const author = useSelector((store) => store.user.user);

  const onSubmit = (data) => {
    fetch('/api/tickets', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.assign(data, { author })),
    })
      .then((res) => res.json())
      .then((data) => dispatch(addBug(data.addBug)))
      .then(() => reset())
      .catch((e) => console.log(e));
  };

  return (
    <section className="bug-add-form">
      <div className="bug-add-content">
        <button onClick={() => dispatch(closeCreate())}>X</button>
        <h2>Create Bug Ticket</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <input type="text" id="title" required {...register('title')} />
            <label htmlFor="title">
              <span>Title</span>
            </label>
          </div>
          <div className="input-wrapper">
            <input type="text" id="time" required {...register('time')} />
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
              required
              {...register('description')}
            ></textarea>
          </div>
          <div className="select-wrapper">
            <label htmlFor="priority">
              <span>Priority</span>
            </label>
            <select
              id="priority"
              defaultValue="Normal"
              required
              {...register('priority')}
            >
              <option value="Low">Low</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>
          <button>Create Ticket</button>
        </form>
      </div>
    </section>
  );
};

export default BugForm;
