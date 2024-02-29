import React from 'react';
import '@testing-library/jest-dom';
import Table from '../components/Table';
import { render, screen } from '@testing-library/react';

describe('Table', () => {
  it('renderizar a tabela com o header corretamente', () => {
    const headerTexts = ["CAR", "NEXT RESERVATION", "STATUS", "RATING", "ACTIONS"];

    render(
      <Table>
        <tr>
          <td>Car 1</td>
          <td>Next Reservation 1</td>
          <td>Status 1</td>
          <td>Rating 1</td>
          <td>Actions 1</td>
        </tr>
        <tr>
          <td>Car 2</td>
          <td>Next Reservation 2</td>
          <td>Status 2</td>
          <td>Rating 2</td>
          <td>Actions 2</td>
        </tr>
      </Table>
    );

    headerTexts.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });

    expect(screen.getByText('Car 1')).toBeInTheDocument();
    expect(screen.getByText('Next Reservation 1')).toBeInTheDocument();
    expect(screen.getByText('Status 1')).toBeInTheDocument();
    expect(screen.getByText('Rating 1')).toBeInTheDocument();
    expect(screen.getByText('Actions 1')).toBeInTheDocument();

    expect(screen.getByText('Car 2')).toBeInTheDocument();
    expect(screen.getByText('Next Reservation 2')).toBeInTheDocument();
    expect(screen.getByText('Status 2')).toBeInTheDocument();
    expect(screen.getByText('Rating 2')).toBeInTheDocument();
    expect(screen.getByText('Actions 2')).toBeInTheDocument();
  });
});
