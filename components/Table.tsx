// components/Table.tsx
import React from 'react';

interface TableProps {
  children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <div className="my-16 border border-gray-500 max-w-screen-md bg-gray-100 rounded min-w-max mx-auto w-80vw">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-700 bg-gray-100">
            <th className="p-2 text-gray-800 pl-2">Car</th>
            <th className="p-2 text-gray-800 pl-2">Next Reservation</th>
            <th className="p-2 text-gray-800 pl-2">Status</th>
            <th className="p-2 text-gray-800 pl-2">Rating</th>
            <th className="p-2 text-gray-800 pl-2">Actions</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
