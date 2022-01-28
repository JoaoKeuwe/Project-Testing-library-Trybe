import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Teste se página contém um heading h2 com o texto Encountered pokémons', () => {
  renderWithRouter(<App />);
  const takeH2 = screen.getByRole('heading', { name: 'Encountered pokémons' });
  expect(takeH2).toBeInTheDocument();
});

test('O botão deve conter o texto "Próximo pokémon"', () => {
  renderWithRouter(<App />);
  const nextBtn = screen.getByRole('button', { name: /próximo pokémon/i,
  });
  expect(nextBtn).toBeInTheDocument();
});

test('Os próximos Pokémons da lista devem ser mostrados ao clicar no botão', () => {
  renderWithRouter(<App />);
  const pokemons = [
    'Pikachu',
    'Charmander',
    'Caterpie',
    'Ekans',
    'Alakazam',
    'Mew',
    'Rapidash',
    'Snorlax',
    'Dragonair',

  ];
  const btnClick = screen.getByRole('button', { name: /próximo pokémon/i,
  });

  pokemons.forEach((pokemon) => {
    const dragonair = screen.getByText(pokemon);
    expect(dragonair).toBeInTheDocument();
    userEvent.click(btnClick);
  });
  const pikachu = screen.getByText(/pikachu/i);
  expect(pikachu).toBeInTheDocument();
});

test('Teste se é mostrado apenas um Pokémon por vez.', () => {
  renderWithRouter(<App />);
  const pokemonType = screen.getAllByTestId('pokemon-type');
  expect(pokemonType).toHaveLength(1);
  expect(pokemonType[0]).toBeInTheDocument();
});

test('este se a Pokédex tem os botões de filtro.', () => {
  renderWithRouter(<App />);
  const SETE = 7;
  const filterButtons = screen.getAllByTestId('pokemon-type-button');
  expect(filterButtons).toHaveLength(SETE);
  expect(filterButtons[0]).toBeInTheDocument();

  const buttonAll = screen.getByRole('button', { name: /All/i });
  expect(buttonAll).toBeInTheDocument();
  userEvent.click(buttonAll);
  const findPikachu = screen.getByTestId('pokemon-type');
  expect(findPikachu).toHaveTextContent('Electric');
});

test('este se a Pokédex tem os botões de filtro.', () => {
  renderWithRouter(<App />);
  const typeFire = screen.getByRole('button', { name: /Fire/i });
  userEvent.click(typeFire);

  const type = screen.getByTestId('pokemon-name');
  expect(type).toHaveTextContent('Charmander');
});
