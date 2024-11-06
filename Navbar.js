// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <div className="text-xl font-bold">EMotorad Dashboard</div>
      <div className="space-x-4">
        <Link to="/profile" className="text-gray-700 hover:text-blue-500">Profile</Link>
        <Link to="/charts" className="text-gray-700 hover:text-blue-500">Charts</Link>
        {/* Add more navigation links */}
      </div>
    </nav>
  );
};

export default Navbar;
