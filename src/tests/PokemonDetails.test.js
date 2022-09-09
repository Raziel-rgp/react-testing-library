import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('07- Test of component <PokemonDetails />', () => {
  test('test 01 - Pokemon Details text exist', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);
    const detailsPok = screen.getByRole('heading', { name: /Pikachu Details/i });
    expect(detailsPok).toBeInTheDocument();
  });
  test('test 02 - Summary heading text exist', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);

    expect(screen.getByRole('heading', { name: /Summary/i })).toBeInTheDocument();
  });
  test('test 03 - Summary text exist', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);
    const summary = screen
      .getByText(/This intelligent Pokémon roasts hard/i);
    expect(summary).toBeInTheDocument();
  });
  test('test 04 - exist a heading with text "Game Locations of <name> "', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);

    const locationPok = screen.getByRole('heading',
      { name: /Game Locations of Pikachu/i });
    expect(locationPok).toBeInTheDocument();
  });
  test('test 05 - exist img of locations with the right src', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);
    const locImg = screen.getAllByRole('img', { name: /Pikachu location/i });
    expect(locImg[1]).toBeInTheDocument();
    expect(locImg[1].src).toBe('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });
  test('test 06 - exist a label with the text of the fav pok', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);
    expect(screen.getByText(/pokémon favoritado\?/i)).toBeInTheDocument();
  });
});
