import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderPath';
import { About } from '../pages';

describe('testes "/about"', () => {
  test('Teste se a página contém as informações sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const aboutPok = screen.getByRole('heading', { description: /about pokédex/i });
    expect(aboutPok).toBeInTheDocument();
  });
  test('Teste se a imagem é src da imagem está certo corretamente', () => {
    renderWithRouter(<About />);
    const aboutImg = screen.getByRole('img', { name: /Pokédex/i });
    expect(aboutImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
/*   test('teste se há 2 parágrafos na pagina', () => {
    renderWithRouter(<About />);
    const aboutP = screen.getAllByRole('paragraph');
    expect(aboutP).toHaveLength(2);
  }); */
});
