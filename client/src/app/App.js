import React from 'react';
import Home from '../pages/Home/Home.js';
import Nav from '../components/Layouts/Nav/Nav.js';
import Dashboard from '../pages/Dashboard/Dashboard.js';
import Tickets from '../pages/Tickets/Tickets.js';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.scss';

const App = () => {
  const verified = useSelector((store) => store.user.validUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={verified ? <Navigate to="/dashboard" /> : <Home />}
        ></Route>
        <Route element={<Nav />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tickets" element={<Tickets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
