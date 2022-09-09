import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('06 - Tests of the component <Pokemon.js /> ', () => {
  test('test 01 - The img have the right src', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);
    const imgPok = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(imgPok.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });
  test('test 02 - The img have alt "pikachu sprite"', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    const spritImg = screen.getByRole('img', { name: /pikachu sprite/i });
    userEvent.click(details);

    expect(spritImg.alt).toBe('Pikachu sprite');
  });
  test('test 03 - Verify the favorite-icon if have src "star-icon-svg', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    expect(details).toHaveAttribute('href', '/pokemons/25');
    userEvent.click(details);

    userEvent.click(screen.getByRole('checkbox', { name: /Pokémon favoritado\?/i }));
    const favImg = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(favImg).toHaveAttribute('src', '/star-icon.svg');
    expect(favImg).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });
  test('test 04 - Verify if have an element of type on screen', () => {
    renderWithRouter(<App />);
    const pokType = screen.getByTestId('pokemon-type');
    expect(pokType).toHaveTextContent('Electric');
  });
});
