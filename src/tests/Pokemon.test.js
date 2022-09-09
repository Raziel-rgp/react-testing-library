import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.js /> ', () => {
  test('A img possui o src correto', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);
    const imgPok = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(imgPok.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });
  test('A img possui o alt "pikachu sprite"', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    const spritImg = screen.getByRole('img', { name: /pikachu sprite/i });
    userEvent.click(details);

    expect(spritImg.alt).toBe('Pikachu sprite');
  });
  test('Verifica se o icone de favorito possue src "star-icon-svg', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    expect(details).toHaveAttribute('href', '/pokemons/25');
    userEvent.click(details);

    userEvent.click(screen.getByRole('checkbox', { name: /Pokémon favoritado\?/i }));
    const favImg = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(favImg).toHaveAttribute('src', '/star-icon.svg');
    expect(favImg).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });
  test('Verifica se há elemento de type na tela', () => {
    renderWithRouter(<App />);
    const pokType = screen.getByTestId('pokemon-type');
    expect(pokType).toHaveTextContent('Electric');
  });
});
