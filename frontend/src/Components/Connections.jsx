// src/components/Connections.js
import React from 'react';

const Connections = () => {
  // Dummy connections data; replace with real data as needed
  const connections = [
    { id: 1, name: 'Jane Smith', university: 'ABC University' },
    { id: 2, name: 'Bob Johnson', university: 'DEF College' },
    // Add more connections as necessary
  ];

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Your Connections</h2>
      <ul className="space-y-2">
        {connections.map((conn) => (
          <li key={conn.id} className="flex items-center p-4 border rounded">
            <img
              src={`https://via.placeholder.com/40?text=${conn.name.charAt(0)}`}
              alt={conn.name}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <p className="font-medium">{conn.name}</p>
              <p className="text-sm text-gray-500">{conn.university}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Connections;
