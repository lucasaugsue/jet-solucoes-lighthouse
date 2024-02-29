import React from 'react';
import '@testing-library/jest-dom';
import TableRow from '../components/TableRow';
import { render, screen } from '@testing-library/react';

describe('TableRow', () => {
  it('renderiza a tabelaRow com dados corretos', () => {
    const rowData = {
      id: 1,
      car: 'Car 1',
      image: 'https://img.freepik.com/psd-premium/carro-esporte-em-fundo-transparente-renderizacao-3d-ilustracao_494250-46519.jpg',
      nextReservation: 'Next Reservation 1',
      status: 'Available',
      rating: 4,
      index: 0,
    };

    render(
      <table>
        <tbody>
          <TableRow
            index={rowData.index}
            key={`${rowData.id};${rowData.index}`}
            car={rowData.car}
            image={rowData.image}
            nextReservation={rowData.nextReservation}
            status={rowData.status}
            rating={rowData.rating}
          />
        </tbody>
      </table>
    );

    expect(screen.getByText('Car 1')).toBeInTheDocument();
    expect(screen.getByText('Next Reservation 1')).toBeInTheDocument();
    expect(screen.getByAltText('Car 1')).toBeInTheDocument();
    expect(screen.getByText('Available')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });
});
