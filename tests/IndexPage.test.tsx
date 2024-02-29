import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import IndexPage from '../pages/index';
import { useMediaQuery } from 'react-responsive';
import { sampleCarData } from '../utils/sample-data';

jest.mock('react-responsive', () => ({
  useMediaQuery: jest.fn(),
}));

describe('IndexPage', () => {
  it('renderizar o mobile corretamente', () => {
    (useMediaQuery as jest.Mock).mockReturnValueOnce(true);

    render(<IndexPage />);

    sampleCarData.forEach((data) => {
      expect(screen.getByText(data.car)).toBeInTheDocument();
      expect(screen.getByAltText(data.car)).toBeInTheDocument();
    });
  });

  it('renderizar o desktop corretamente', () => {
    (useMediaQuery as jest.Mock).mockReturnValueOnce(false);

    render(<IndexPage />);

    sampleCarData.forEach((data) => {
      expect(screen.getByText(data.car)).toBeInTheDocument();
      expect(screen.getByText(data.nextReservation)).toBeInTheDocument();
      expect(screen.getByAltText(data.car)).toBeInTheDocument();
    });
  });
});
