import React from 'react';
import RatingStars from 'react-rating-stars-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEllipsisV, faClock } from '@fortawesome/free-solid-svg-icons';
import '../fontAwesomeConfig';

interface CardMobileProps {
  car: string;
  image: string;
  nextReservation: string;
  status: string;
  rating: number;
  index: number;
}

const CardMobile: React.FC<CardMobileProps> = ({ car, image, nextReservation, status, rating, index }) => {
  const rowClassName = index % 2 !== 0 ? 'bg-gray-100' : 'bg-white';

  return (
    <div className={`border border-gray-350 ${rowClassName} p-2 flex flex-row items-center mx-auto max-w-screen-md`} style={{ padding: '16px' }}>
      <div className="flex-shrink-0 relative mr-4">
        <img className="w-32 h-32" src={image} alt={car} />
        {status === 'Available' && (
          <div className="m-1 absolute top-0 left-0 flex items-center justify-center w-8 h-8 bg-green-700 rounded-full">
            <FontAwesomeIcon icon={faCheck} size="lg" color="#ffffff" />
          </div>
        )}
        {status === 'Booked' && (
          <div className="m-1 absolute top-0 left-0 flex items-center justify-center w-8 h-8 bg-yellow-500 rounded-full">
            <FontAwesomeIcon icon={faClock} size="lg" color="#ffffff" />
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-grow ml-4">
        <div className="mb-2 text-lg font-bold">{car}</div>
        <div className="mb-2 text-md" style={{ color: '#6b7280' }}>Next reservation: {nextReservation}</div>
        <div className="mb-2 flex justify-start items-center">
          <RatingStars
            count={5}
            value={rating}
            isHalf={true}
            edit={false}
            size={32} 
            activeColor="#111928"
          />
        </div>
      </div>

      <div className="grid flex-col justify-center items-center grid-rows-4">
        <FontAwesomeIcon icon={faEllipsisV} size="2x" />
      </div>
    </div>
  );
};

export default CardMobile;
