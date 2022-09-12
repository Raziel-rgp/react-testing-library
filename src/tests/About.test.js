import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import { About } from '../pages';

describe('2- Tests <About.js />', () => {
  test('test 01 - Test if the elements are on the page', () => {
    renderWithRouter(<About />);
    const aboutPok = screen.getByRole('heading', { name: /About Pokédex/i });
    expect(aboutPok).toBeInTheDocument();
  });
  test('test 02 - test if the src is right', () => {
    renderWithRouter(<About />);
    const aboutImg = screen.getByRole('img', { name: /Pokédex/i });
    expect(aboutImg.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
