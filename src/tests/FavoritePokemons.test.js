import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';

test('Teste se é exibido na tela a mensagem No favorite pokemon found', () => {
  render(
    <MemoryRouter>
      <FavoritePokemons />
    </MemoryRouter>,
  );

  const pargraph = screen.getByText(/No favorite pokemon found/i);
  expect(pargraph).toBeInTheDocument();
});

test('Teste se é exibido todos os cards de pokémons favoritados.', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  const moreDetails = screen.getByRole('link', { name: /More Details/i });
  userEvent.click(moreDetails);

  const checked = screen.getByLabelText('Pokémon favoritado?');
  userEvent.click(checked);

  const favorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
  userEvent.click(favorite);

  const favoritePokemons = screen.getByRole('heading', { name: 'Favorite pokémons' });

  const pokemonImage = screen.getByText(/Pikachu/i);

  expect(pokemonImage).toBeInTheDocument();
  expect(favoritePokemons).toBeInTheDocument();
});
