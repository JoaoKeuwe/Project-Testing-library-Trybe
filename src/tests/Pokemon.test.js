import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('O nome correto do Pokémon deve ser mostrado na tela', () => {
  renderWithRouter(<App />);
  const pokemonName = screen.getByText(/pikachu/i);
  expect(pokemonName).toBeInTheDocument();
});
