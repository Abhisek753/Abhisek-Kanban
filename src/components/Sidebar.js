// src/components/Sidebar.js
import React from 'react';

const Sidebar = ({ openModal, columns }) => {
  return (
    <div className="w-1/5 bg-white dark:bg-gray-900 p-4 flex flex-col h-screen shadow">
      <div className="text-2xl font-semibold mb-8">kanban</div>
      <ul className="flex-1">
        {columns.map(column => (
          <li key={column} className="p-2 text-gray-600 dark:text-gray-300 cursor-pointer">
            {column.charAt(0).toUpperCase() + column.slice(1)}
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <button className="w-full bg-blue-500 text-white p-2 rounded" onClick={openModal}>
          + Create New Board
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
