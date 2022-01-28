import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('O nome correto do Pokémon deve ser mostrado na tela', () => {
  renderWithRouter(<App />);
  const pokemonName = screen.getByText(/pikachu/i);
  expect(pokemonName).toBeInTheDocument();
});

test('O tipo correto do pokémon deve ser mostrado na tela', () => {
  renderWithRouter(<App />);
  const findPikachu = screen.getByTestId('pokemon-type');
  expect(findPikachu).toHaveTextContent('Electric');
});

test('teste se o card do Pokémon indicado na Pokédex contém um link de navegação', () => {
  const { history } = renderWithRouter(<App />);
  const btndetails = screen.getByRole('link', { name: /more details/i });
  userEvent.click(btndetails);
  history.push('/pokemons/25');
  const { location: { pathname } } = history;
  expect(pathname).toBe('/pokemons/25');
  const name = screen.getByRole('heading', { name: /Pikachu Details/i });
  expect(name).toBeInTheDocument();
});

test('A imagem do Pokémon deve ser exibida. Ela deve conter um atributo src ', () => {
  renderWithRouter(<App />);
  const imageTake = screen.getByAltText(/Pikachu sprite/i);
  expect(imageTake).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  expect(imageTake).toHaveAttribute('alt', 'Pikachu sprite');
});

test('A imagem do Pokémon deve ser exibida. Ela deve conter um atributo src ', () => {
  renderWithRouter(<App />);
  const moreDetails = screen.getByRole('link', { name: /More details/i });

  userEvent.click(moreDetails);

  const checkedFavorite = screen.getByLabelText('Pokémon favoritado?');

  userEvent.click(checkedFavorite);

  const starImage = screen.getByAltText(/Pikachu is marked as favorite/i);

  expect(starImage).toHaveAttribute('src', '/star-icon.svg');

  expect(starImage).toHaveAttribute('alt', 'Pikachu is marked as favorite');
});
