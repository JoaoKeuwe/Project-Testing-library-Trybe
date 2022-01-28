import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('Teste se a página contém as informações sobre a Pokédex.', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  const clickAbout = screen.getByRole('link', { name: /About/i });
  userEvent.click(clickAbout);

  expect(clickAbout).toBeInTheDocument();
});

// testa h2
test('Teste se a página contém um heading h2 com o texto About Pokédex.', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  const aboutPokedex = screen.getByRole('heading', { level: 2 });
  expect(aboutPokedex).toBeInTheDocument();
});

// testa parágrafo
test('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const clickAbout = screen.getByRole('link', { name: /About/i });
  userEvent.click(clickAbout);

  const firstPragraph = screen.getByText(/This application simulates a Pokédex/i);
  const secondParagraph = screen.getByText(/One can filter Pokémons by type/i);

  expect(firstPragraph).toBeInTheDocument();
  expect(secondParagraph).toBeInTheDocument();
});

test('testa se renderiza a imagem', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  const takeImage = screen.getByRole('img',
    { src: 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.pngPikachu crying because the page requested was not found' });
  expect(takeImage).toBeInTheDocument();
});
