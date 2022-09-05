import { screen } from '@testing-library/react';
import renderPath from './helpers/renderPath';

describe('1- Será validado se o cabeçario está funcional ', () => {
  it('Será verificado se na pagina inicial é renderizada corretamente', () => {
    renderPath('/');

    expect(screen.getByText('Encountered pokémons')).toBeInTheDocument();
  });
  it('Será verificado se a pagina "about" é renderizada corretamente', () => {
    renderPath('/about');

    expect(screen.getByText('About Pokédex')).toBeInTheDocument();
  });
  it('Será verificado se a padina "Favorite Pokémons" é renderizada corretamente', () => {
    renderPath('/favorites');

    expect(screen.getByText('Favorite pokémons')).toBeInTheDocument();
  });
});
