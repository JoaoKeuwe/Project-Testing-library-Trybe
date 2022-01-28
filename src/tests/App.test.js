import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

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

// home
test('clicando no home direciona para a página inicial', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  const takeHome = screen.getByRole('link', { name: /Home/i });
  userEvent.click(takeHome);

  const conferPage = screen.getByRole('heading', { name: /Encountered pokémons/i });
  expect(conferPage).toBeInTheDocument();
});

// home
test('clicando no about renderiza a pagina about', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  const takeAbout = screen.getByRole('link', { name: /About/i });
  userEvent.click(takeAbout);

  const pageAbout = screen.getByRole('heading', { name: /About Pokédex/i });
  expect(pageAbout).toBeInTheDocument();
});

// Favorite Pokémons
test('clicando em Favorite Pokémons renderiza a página Favorite Pokémons', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  const favoritePokemons = screen.getByRole('link', { name: /Favorite Pokémons/i });
  userEvent.click(favoritePokemons);

  const pokemonFavorite = screen.getByRole('heading', { name: /Favorite Pokémons/i });
  expect(pokemonFavorite).toBeInTheDocument();
});

test('redireciona para a página notfound', () => {
  const { history } = renderWithRouter(<App />);

  history.push('/keuwe');

  const takeText = screen.getByRole('heading', { name: /Page requested not found/i });

  const takeImage = screen.getByRole('img',
{ name: 'Pikachu crying because the page requested was not found' });
  expect(takeImage).toBeInTheDocument();
  expect(takeText).toBeInTheDocument();
});
