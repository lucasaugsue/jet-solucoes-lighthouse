// components/TableRow.tsx
import React from 'react';
import RatingStars from 'react-rating-stars-component';

interface TableRowProps {
  car: string;
  image: string;
  nextReservation: string;
  status: string;
  rating: number;
  index: number;
}

const TableRow: React.FC<TableRowProps> = ({ car, image, nextReservation, status, rating, index }) => {
  const rowClassName = index % 2 !== 0 ? 'bg-gray-100' : 'bg-white';
  const buttonBackgroundColor = status === 'Available' ? 'bg-green-100' : (status === 'Booked' ? 'bg-yellow-100' : '');
  const buttonTextColor = status === 'Available' ? 'text-green-800' : (status === 'Booked' ? 'text-yellow-800' : '');

  return (
    <tr className={`border-b border-gray-500 ${rowClassName}`}>
      <td className={`w-1/5 p-2 text-gray-800 pl-2`}>
        <div className="flex items-center">
          <img className="w-24 h-24 mr-2" src={image} alt={car} />
          {car}
        </div>
      </td>
      <td className="w-1/5 p-2 text-gray-800 pl-2">{nextReservation}</td>
      <td className="w-1/5 p-2 pl-2">
        <button className={`py-1 px-4 rounded-md ${buttonBackgroundColor} ${buttonTextColor}`}>
          {status}
        </button>
      </td>
      <td className="w-1/5 p-2 text-gray-800 pl-2">
        <RatingStars
          value={rating}
          edit={false}
          size={24}
          activeColor="#111928"
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          isHalf={true}
        />
      </td>
      <td className="w-1/5 p-2 text-gray-800 pl-2">Actions...</td>
    </tr>
  );
};

export default TableRow;
