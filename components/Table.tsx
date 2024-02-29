import React from 'react';

interface TableProps {
  children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => {
  const headerTexts = ["CAR", "NEXT RESERVATION", "STATUS", "RATING", "ACTIONS"];
  
  return (
    <div className="pl-8 pr-8">
      <div className="my-16 border border-gray-300 max-w-screen-2xl bg-gray-100 rounded mx-auto w-100vw table-border-color">
        <table className="w-full text-left">
          <thead>
            <tr style={{ backgroundColor: '#f9fafb' }} className="border-b border-gray-300">
              {headerTexts.map((text, index) => (
                <th 
                  key={`${index}-${text}`} 
                  style={{ color: '#808793' }}
                  className={`pt-3 pb-3 ${text === 'ACTIONS' ? 'pl-5 pr-5' : 'pr-3 pl-3 md:pl-1 md:pr-1'}`} 
                >
                  {text}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
