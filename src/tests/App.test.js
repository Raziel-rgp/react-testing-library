import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';

describe('01- Test of the component <App.js /> ', () => {
  test('test 01 - Test if page "Home" render correctly', () => {
    renderWithRouter(<App />);
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  });
  test('test 02 - Test if has the link to "About" page', () => {
    renderWithRouter(<App />);
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  });
  test('test 03 - Test if has the link to "Favorite Pokémons" page', () => {
    renderWithRouter(<App />);
    expect(screen.getByRole('link',
      { name: /Favorite Pokémons/i })).toBeInTheDocument();
  });
});
