import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './helpers/renderPath';

describe('1- Será validado se o cabeçario está funcional ', () => {
  test('Será verificado se na pagina inicial é renderizada corretamente', () => {
    renderWithRouter(<App />);
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  });
  test('Será verificado se a pagina "about" é renderizada corretamente', () => {
    renderWithRouter(<App />);
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  });
  test('Será verificado se a padina "Favorite Pokémons" é render corretamente', () => {
    renderWithRouter(<App />);
    expect(screen.getByRole('link',
      { name: /Favorite Pokémons/i })).toBeInTheDocument();
  });
});
