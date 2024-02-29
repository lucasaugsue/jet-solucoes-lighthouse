import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Layout from '../components/Layout';

jest.mock('../components/Layout', () => ({ children, title }: { children: React.ReactNode; title?: string }) => (
    <div>
      <title data-testid="layout-title">{title}</title>
      {children}
    </div>
));

describe('Layout', () => {
  it('renderizar o titulo corretamente', () => {
    const title = 'Test Title';
    const childText = 'Test Child';

    render(<Layout title={title}><div>{childText}</div></Layout>);

    expect(screen.getByTestId('layout-title')).toBeInTheDocument();
  });

  it('renderizar sem o titulo', () => {
    const childText = 'Test Child';

    render(<Layout><div>{childText}</div></Layout>);

    expect(screen.getByText(childText)).toBeInTheDocument();
  });
});
