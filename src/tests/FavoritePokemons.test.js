import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import { FavoritePokemons } from '../pages';

describe('3- Teste o componente <FavoritePokemon.js />', () => {
  test('', () => {
    renderWithRouter(<FavoritePokemons />);
    const favPok = screen.getByText(/No favorite pokemon found/i);
    expect(favPok).toBeInTheDocument();
  });
});
