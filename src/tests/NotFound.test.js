import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import { NotFound } from '../pages';

describe('4- Tests of component <NotFound.js />', () => {
  test('test 01 - Test if the image "src" is right', () => {
    renderWithRouter(<NotFound />);
    const notFoundImg = screen.getByRole('img', { name: /Pikachu crying because/i });
    expect(notFoundImg).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
  test('test 02 - test if the text "Page requested not found" is render', () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByRole('heading', { name:
      /Page requested not found/i })).toBeInTheDocument();
  });
});
