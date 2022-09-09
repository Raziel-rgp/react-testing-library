import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import { FavoritePokemons } from '../pages';

describe('03- Test the component <FavoritePokemon.js />', () => {
  test('test 01 - Test if no pokemon was found', () => {
    renderWithRouter(<FavoritePokemons />);
    const favPok = screen.getByText(/No favorite pokemon found/i);
    expect(favPok).toBeInTheDocument();
  });
});
