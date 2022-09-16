import React, { useEffect } from 'react';
import './Home.scss';
import Login from '../../components/Auth/Login/Login.js';
import Register from '../../components/Auth/Register/Register.js';
import { useSelector } from 'react-redux';

const Home = () => {
  const isRegister = useSelector((store) => store.user.isRegister);

  useEffect(() => {
    document.title = 'Home';
  });
  return (
    <div className="home">
      <header>
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="currentColor"
            className="bi bi-bug-fill"
            viewBox="0 0 16 16"
          >
            <path d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A4.985 4.985 0 0 0 3 6h10a4.985 4.985 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A4.978 4.978 0 0 0 8 1a4.979 4.979 0 0 0-2.731.811l-.29-.956z" />
            <path d="M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975z" />
          </svg>
          <h1>Bug Tracker</h1>
        </a>
      </header>
      <main>{isRegister ? <Register /> : <Login />}</main>
      <footer>
        <p>
          &#169; 2022 <span>Jigar Patel</span>
        </p>
      </footer>
    </div>
  );
};

export default Home;
