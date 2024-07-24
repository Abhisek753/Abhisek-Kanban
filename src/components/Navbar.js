// src/components/Navbar.js
import React from 'react';

const Navbar = ({ openModal }) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 flex justify-between items-center shadow">
      <div className="text-xl font-semibold">Platform Launch</div>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={openModal}
      >
        + Add New Task
      </button>
    </div>
  );
};

export default Navbar;
