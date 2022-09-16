import React from 'react';
import './Login.scss';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login, openRegister } from '../../../features/userSlice';

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) =>
    fetch('/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) return res.json();
        else throw new Error('Invalid username or password!');
      })
      .then((data) => dispatch(login(data.user)))
      .then(() => reset())
      .catch((e) => console.log(e));

  const handleClick = () => {
    dispatch(openRegister());
  };

  return (
    <div className="login">
      <section className="login-container">
        <h2>Login</h2>
        <p>Welcome! Login to access Bug Tracker.</p>
        <p>
          Did you <a href="#">forget your password?</a>
        </p>
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
          </div>
          <div className="checkbox-wrapper">
            <input id="rememberMe" type="checkbox" />
            <label htmlFor="rememberMe">
              <span>Remember Me</span>
            </label>
          </div>
          <button>Sign in</button>
        </form>
      </section>
      <section className="register-container">
        <h2>Register</h2>
        <p>Don't have an account? Register one!</p>
        <button onClick={handleClick}>Register an account</button>
      </section>
    </div>
  );
};

export default Login;
