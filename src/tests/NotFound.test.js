import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderPath';
import { NotFound } from '../pages';

describe('', () => {
  test('Teste se a imagem é src da imagem está certo corretamente', () => {
    renderWithRouter(<NotFound />);
    const notFoundImg = screen.getByRole('img', { name: /Pikachu crying because/i });
    expect(notFoundImg).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
  test('Teste se o texto "Page requested not found" é renderizado', () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByRole('heading', { name:
      /Page requested not found/i })).toBeInTheDocument();
  });
});
