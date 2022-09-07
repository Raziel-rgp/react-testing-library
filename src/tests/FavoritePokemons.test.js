import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderPath';
import { FavoritePokemons } from '../pages';

describe('testes da pagina /favorite', () => {
  test('', () => {
    renderWithRouter(<FavoritePokemons />);
    const favPok = screen.getByRole('heading', { description: /Favorite pokémons/i });
    expect(favPok).toBeInTheDocument();
  });
});
