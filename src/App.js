// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Board from './components/Board';
import Modal from './components/Modal';

const initialTasks = {
  todo: [
    { id: 1, title: 'Build UI for onboarding flow', subtasks: 3 },
    { id: 2, title: 'Create template structure', subtasks: 2 },
  ],
  doing: [
    { id: 3, title: 'Add account management endpoints', subtasks: 1 },
    { id: 4, title: 'Design onboarding flow', subtasks: 2 },
  ],
  done: [
    { id: 5, title: 'Conduct 5 wireframe tests', subtasks: 1 },
    { id: 6, title: 'Create wireframe prototype', subtasks: 1 },
  ],
};

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [columns, setColumns] = useState(['todo', 'doing', 'done']);
  const [darkMode, setDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addColumn = (newColumn) => {
    if (!columns.includes(newColumn)) {
      setColumns([...columns, newColumn]);
      setTasks({ ...tasks, [newColumn]: [] });
    }
  };

  const editColumn = (oldColumn, newColumn) => {
    const newColumns = columns.map(col => (col === oldColumn ? newColumn : col));
    const newTasks = { ...tasks, [newColumn]: tasks[oldColumn] };
    delete newTasks[oldColumn];
    setColumns(newColumns);
    setTasks(newTasks);
  };

  const removeColumn = (column) => {
    const newColumns = columns.filter(col => col !== column);
    const newTasks = { ...tasks };
    delete newTasks[column];
    setColumns(newColumns);
    setTasks(newTasks);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={`flex h-screen ${darkMode ? 'dark' : ''}`}>
      <Sidebar openModal={openModal} columns={columns} />
      <div className="flex-1 flex flex-col">
        <Navbar openModal={openModal} />
        <div className="flex-1 p-4 bg-gray-100 dark:bg-gray-800">
          <Board tasks={tasks} setTasks={setTasks} columns={columns} addColumn={addColumn} editColumn={editColumn} removeColumn={removeColumn} />
          {isModalOpen && (
            <Modal closeModal={closeModal} addColumn={addColumn} columns={columns} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
