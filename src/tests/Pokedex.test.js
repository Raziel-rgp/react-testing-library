import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('5- Tests of the component <Pokedex.js />', () => {
  test('test 01 - Verify if the page have a heading h2 with text "Encountered Pokémon"',
    () => {
      renderWithRouter(<App />);

      expect(screen.getByRole('heading',
        { name: /Encountered pokémon/i })).toBeInTheDocument();
    });

  test('test 02 - Verify if the next pokemon of list is showed on click',
    () => {
      renderWithRouter(<App />);
      userEvent.click(screen.getByRole('button', { name: /próximo pokémon/i }));

      expect(screen.getByTestId('pokemon-name')).toHaveTextContent('Charmander');
    });

  test(`test 03 - Verify filter of buttons 
    contain "data-testid=pokemon-type-button"`, () => {
    renderWithRouter(<App />);

    expect(screen.getByRole('button',
      { name: /all/i })).not.toHaveAttribute('data-testid', 'pokemon-type-button');

    expect(screen.getByRole('button',
      { name: /electric/i })).toHaveAttribute('data-testid', 'pokemon-type-button');
  });

  test('test 04 - Verify if is shown one at a time', () => {
    renderWithRouter(<App />);

    expect(screen.getAllByTestId('pokemon-name'));
  });
  test('test 05 - verify if is possible click on "all"', () => {
    renderWithRouter(<App />);

    const all = screen.getByRole('button', { name: /all/i });
    expect(all).toBeEnabled();
    userEvent.click(all);
  });
});
