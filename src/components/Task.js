// src/components/Task.js
import React from 'react';

const Task = ({ task, column }) => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', task.id);
    event.dataTransfer.setData('source', column);
  };

  return (
    <div
      className="bg-white dark:bg-gray-900 p-4 mb-4 rounded-lg shadow"
      draggable
      onDragStart={handleDragStart}
    >
      <div className="font-medium">{task.title}</div>
      <div className="text-gray-500 dark:text-gray-400">{task.subtasks} subtasks</div>
    </div>
  );
};

export default Task;
