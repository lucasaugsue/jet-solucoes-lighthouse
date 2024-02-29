// components/Table.tsx
import React from 'react';

interface TableProps {
  children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => {
  const headerTexts = ["CAR", "NEXT RESERVATION", "STATUS", "RATING", "ACTIONS"];
  
  return (
    <div className="ml-10 mr-10 my-16 border border-gray-300 m-2 max-w-screen-2xl bg-gray-100 rounded mx-auto w-100vw table-border-color">
      <table className="w-full text-left">
        <thead>
          <tr style={{ backgroundColor: '#f9fafb' }} className="border-b border-gray-300">
            {headerTexts.map((text, index) => (
              <th 
                key={`${index}-${text}`} 
                style={{ color: '#808793' }}
                className={`pt-3 pb-3  ${text === 'CAR' ? 'pl-5' : (text === 'ACTIONS' ? 'pr-5' : 'pr-1 pl-1')}`} 
              >
                {text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
