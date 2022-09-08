import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('5- Teste os Componentes <Pokedex.js />', () => {
  test('Verifica se a página contém um heading h2 com o texto "Encountered Pokémon"',
    () => {
      renderWithRouter(<App />);

      expect(screen.getByRole('heading',
        { name: /Encountered pokémon/i })).toBeInTheDocument();
    });

  test('Verifica se é exibido o proximo pokemon da lista quando o botão é clicado',
    () => {
      renderWithRouter(<App />);
      userEvent.click(screen.getByRole('button', { name: /próximo pokémon/i }));

      expect(screen.getByTestId('pokemon-name')).toHaveTextContent('Charmander');
    });

  test(`Verifica se a filtragem de botões 
    contém data-testid=pokemon-type-button`, () => {
    renderWithRouter(<App />);

    expect(screen.getByRole('button',
      { name: /all/i })).not.toHaveAttribute('data-testid', 'pokemon-type-button');

    expect(screen.getByRole('button',
      { name: /electric/i })).toHaveAttribute('data-testid', 'pokemon-type-button');
  });

  test('Verifica se apenas 1 pokemon é mostrado por vez', () => {
    renderWithRouter(<App />);

    expect(screen.getAllByTestId('pokemon-name'));
  });
});
