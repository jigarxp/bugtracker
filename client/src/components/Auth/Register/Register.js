import React from 'react';
import './Register.scss';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeRegister } from '../../../features/userSlice';

const Register = () => {
  const { register, handleSubmit, watch, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    fetch('/register', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(() => reset());
  };

  const handleClick = () => {
    dispatch(closeRegister());
  };

  return (
    <section className="register">
      <button onClick={handleClick}>X</button>
      <h2>Create a Bug Tracker Account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <div className="input-wrapper">
            <input
              type="text"
              id="username"
              required
              autoComplete="off"
              {...register('username')}
            />
            <label htmlFor="username">
              <span>Username</span>
            </label>
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              id="password"
              required
              autoComplete="off"
              {...register('password')}
            />
            <label htmlFor="password">
              <span>Password</span>
            </label>
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              id="cPassword"
              required
              autoComplete="off"
              {...register('cPassword', {
                validate: (val) =>
                  val === watch('password') || 'Passwords do not match',
              })}
            />
            <label htmlFor="cPassword">
              <span>Confirm Password</span>
            </label>
          </div>
          <button>Register</button>
        </div>
      </form>
    </section>
  );
};

export default Register;
