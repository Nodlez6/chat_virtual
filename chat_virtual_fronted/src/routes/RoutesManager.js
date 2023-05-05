import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../views/Login/Login';
import Dashboard from '../views/Dashboard/Dashboard';

const RoutesManager = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);

export default RoutesManager;
