// src/components/Modal.js
import React, { useState } from 'react';

const Modal = ({ closeModal, addColumn, columns }) => {
  const [columnName, setColumnName] = useState('');

  const handleAddColumn = () => {
    if (columnName.trim()) {
      addColumn(columnName.toLowerCase());
      closeModal();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Add New Column</h2>
        <input
          className="w-full p-2 rounded border mb-4"
          value={columnName}
          onChange={(e) => setColumnName(e.target.value)}
          placeholder="Enter column name"
        />
        <div className="flex justify-end space-x-4 mb-4">
          <button className="bg-red-500 text-white p-2 rounded" onClick={closeModal}>
            Cancel
          </button>
          <button className="bg-blue-500 text-white p-2 rounded" onClick={handleAddColumn}>
            Add Column
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
