// src/components/Dashboard.js
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Profile from './Profile';
import Charts from './Charts';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 p-4 bg-gray-100">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/charts" element={<Charts />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
