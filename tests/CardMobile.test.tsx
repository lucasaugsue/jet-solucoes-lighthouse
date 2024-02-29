import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardMobile from '../components/CardMobile';

describe('CardMobile', () => {
  it('renders card mobile with data', () => {
    const cardData = {
        id: 1,
        car: 'Car 1',
        image: 'https://img.freepik.com/psd-premium/carro-esporte-em-fundo-transparente-renderizacao-3d-ilustracao_494250-46519.jpg',
        nextReservation: '11/07',
        status: 'Available',
        rating: 4,
        index: 0,
    };

    render(<CardMobile
        index={cardData.index}
        key={`${cardData.id};${cardData.index}`}
        car={cardData.car}
        image={cardData.image}
        nextReservation={cardData.nextReservation}
        status={cardData.status}
        rating={cardData.rating} 
    />);

    expect(screen.getByText('Car 1')).toBeInTheDocument();
    expect(screen.getByAltText('Car 1')).toBeInTheDocument();
    expect(screen.getByText('Next reservation: 11/07')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });
});
