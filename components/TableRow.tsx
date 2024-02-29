// components/TableRow.tsx
import React from 'react';
import RatingStars from 'react-rating-stars-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import '../fontAwesomeConfig';

interface TableRowProps {
  car: string;
  image: string;
  nextReservation: string;
  status: string;
  rating: number;
  index: number;
}

const TableRow: React.FC<TableRowProps> = ({ car, image, nextReservation, status, rating, index }) => {
  const rowClassName = index % 2 !== 0 ? 'bg-gray-60' : 'bg-white';
  const buttonBackgroundColor = status === 'Available' ? 'bg-green-100' : (status === 'Booked' ? 'bg-yellow-100' : '');
  const buttonTextColor = status === 'Available' ? 'text-green-800' : (status === 'Booked' ? 'text-yellow-800' : '');

  return (
    <tr className={`border-b border-gray-350 ${rowClassName}`}>
      <td className={`w-1/3 p-2 text-gray-800 pl-2`}>
        <div className="flex items-center">
          <img className="w-16 h-16 mr-3" src={image} alt={car} />
          {car}
        </div>
      </td>
      <td 
        style={{ color: '#6b7280' }}
        className="w-1/5 p-2 text-gray-800 pl-2"
      > {nextReservation} </td>
      <td className="w-1/5 p-2 pl-2">
        <button className={`py-1 px-4 rounded-md ${buttonBackgroundColor} ${buttonTextColor}`}>
          {status}
        </button>
      </td>
      <td className="w-1/5 p-2 text-gray-800 pl-2">
        <RatingStars
          count={5}
          value={rating}
          isHalf={true}
          edit={false}
          size={24}
          activeColor="#111928"
        />
      </td>
      <td className="w-1/7 p-2 text-gray-800 pl-2 text-center"> 
        <FontAwesomeIcon icon={faEllipsisV} size="lg" />
      </td>
    </tr>
  );
};

export default TableRow;
