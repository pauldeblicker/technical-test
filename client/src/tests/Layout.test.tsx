import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';

describe('<Layout />', () => {
  const renderWithRouter = () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
  };

  test('Should display navigation links', () => {
    renderWithRouter();

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Devis' })).toBeInTheDocument();
  });

  test('Home link should point to /', () => {
    renderWithRouter();

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
  });

  test('Devis link should point to /devis', () => {
    renderWithRouter();

    expect(screen.getByRole('link', { name: 'Devis' })).toHaveAttribute('href', '/devis');
  });
});

