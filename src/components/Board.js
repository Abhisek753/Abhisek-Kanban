// src/components/Board.js
import React from 'react';
import Column from './Column';

const Board = ({ tasks, setTasks, columns, addColumn, editColumn, removeColumn }) => {
  const addTask = (column, task) => {
    setTasks(prevTasks => ({
      ...prevTasks,
      [column]: [...prevTasks[column], task],
    }));
  };

  const moveTask = (taskId, source, destination) => {
    const taskToMove = tasks[source].find(task => task.id === taskId);
    setTasks(prevTasks => ({
      ...prevTasks,
      [source]: prevTasks[source].filter(task => task.id !== taskId),
      [destination]: [...prevTasks[destination], taskToMove],
    }));
  };

  const handleAddColumn = () => {
    const newColumn = prompt("Enter column name:");
    if (newColumn && !columns.includes(newColumn.toLowerCase())) {
      addColumn(newColumn.toLowerCase());
    }
  };

  return (
    <div className="flex-1 p-4">
      <div className="flex space-x-4">
        {columns.map(column => (
          <Column
            key={column}
            title={column}
            tasks={tasks[column]}
            addTask={addTask}
            moveTask={moveTask}
            editColumn={editColumn}
            removeColumn={removeColumn}
          />
        ))}
        <div className="w-1/4 bg-gray-200 dark:bg-gray-700 p-4 rounded-lg flex items-center justify-center cursor-pointer" onClick={handleAddColumn}>
          + New Column
        </div>
      </div>
    </div>
  );
};

export default Board;
