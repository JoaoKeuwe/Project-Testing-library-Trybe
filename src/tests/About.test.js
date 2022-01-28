import { screen } from '@testing-library/react';
import React from 'react';
/* import userEvent from '@testing-library/user-event'; */
import renderWithRouter from '../renderWithRouter';
/* import { MemoryRouter } from 'react-router-dom'; */
import About from '../components/About';

// testa h2
test('Teste se a página contém um heading h2 com o texto About Pokédex.', () => {
  renderWithRouter(<About />);

  const aboutPokedex = screen.getByRole('heading', { name: /About Pokédex/i });
  expect(aboutPokedex).toBeInTheDocument();
});

// testa parágrafo
test('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
  renderWithRouter(<About />);
  const firstPragraph = screen.getByText(/This application simulates a Pokédex/i);
  const secondParagraph = screen.getByText(/One can filter Pokémons by type/i);

  expect(firstPragraph).toBeInTheDocument();
  expect(secondParagraph).toBeInTheDocument();
});

test('testa se renderiza a imagem', () => {
  renderWithRouter(<About />);
  const takeImage = screen.getByAltText(/Pokédex/i);
  expect(takeImage).toBeInTheDocument();
  expect(takeImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  expect(takeImage).toHaveAttribute('alt', 'Pokédex');
});
