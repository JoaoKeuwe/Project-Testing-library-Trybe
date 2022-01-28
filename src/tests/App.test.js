import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  // O primeiro link deve possuir o Home
  // 1- renderizar o componente
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  // 2- fazer o teste
  const homeLink = screen.getByRole('link', { name: /Home/i });
  expect(homeLink).toBeInTheDocument();

  const aboutLink = screen.getByRole('link', { name: /About/i });
  expect(aboutLink).toBeInTheDocument();

  const favritePokemon = screen.getByRole('link', { name: /Favorite Pokémons/i });
  expect(favritePokemon).toBeInTheDocument();
});
