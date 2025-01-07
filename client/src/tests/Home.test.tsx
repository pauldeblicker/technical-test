import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { Home } from '../components/Home';

describe('<Home />', () => {
  test('Should display a welcome message', () => {
    render(<Home />);

    expect(screen.getByText('Bienvenue')).toBeVisible();
  });
});
