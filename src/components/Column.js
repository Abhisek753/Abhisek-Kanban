// src/components/Column.js
import React, { useState } from 'react';
import Task from './Task';

const Column = ({ title, tasks, addTask, moveTask, editColumn, removeColumn }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      subtasks: 0,
    };
    addTask(title.toLowerCase(), newTask);
    setNewTaskTitle('');
  };

  const handleDrop = (event) => {
    const taskId = parseInt(event.dataTransfer.getData('text/plain'), 10);
    moveTask(taskId, event.dataTransfer.getData('source'), title.toLowerCase());
  };

  const handleEditColumn = () => {
    setIsEditing(false);
    editColumn(title, editedTitle.toLowerCase());
  };

  return (
    <div
      className="w-1/3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg relative"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <div className="flex justify-between items-center mb-4">
        {isEditing ? (
          <input
            className="w-full p-2 rounded border"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onBlur={handleEditColumn}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleEditColumn();
              }
            }}
          />
        ) : (
          <div className="text-lg font-semibold">{title.charAt(0).toUpperCase() + title.slice(1)}</div>
        )}
        <div className="flex space-x-2">
          <button className="text-gray-600 dark:text-gray-300" onClick={() => setIsEditing(true)}>✏️</button>
          <button className="text-red-600 dark:text-red-300" onClick={() => removeColumn(title)}>✖️</button>
        </div>
      </div>
      {tasks.map(task => (
        <Task key={task.id} task={task} column={title.toLowerCase()} />
      ))}
      <input
        className="w-full p-2 rounded mt-4"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        placeholder="New task"
      />
      <button className="bg-blue-500 text-white p-2 rounded mt-2" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default Column;
