import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import pokemons from '../data';

const filterPokemon = [...new Set(pokemons.map(({ type }) => type))];

describe('', () => {
  test('', () => {
    
  });
});