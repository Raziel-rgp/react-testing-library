import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderPath';
import { FavoritePokemons } from '../pages';

describe('testes da pagina /favorite', () => {
  test('', () => {
    renderWithRouter(<FavoritePokemons />);
    const favPok = screen.getByRole('heading', { description:
      /No favorite pokemon found/i });
    expect(favPok).toBeInTheDocument();
  });
});
