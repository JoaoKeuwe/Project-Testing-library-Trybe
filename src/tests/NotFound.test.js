import { render, screen } from '@testing-library/react';
import React from 'react';
/* import userEvent from '@testing-library/user-event'; */
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

/* test('Teste se página contém um heading h2 com o texto Page requested;', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  const { history } = renderWithRouter(<App />);

  history.push('/keuwe');

  const takeText = screen.getByText(/page requested not found 😭/i);
  expect(takeText).toBeInTheDocument();
}); */

test('Teste se é exibido na tela a mensagem No favorite pokemon found', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  const { history } = renderWithRouter(<App />);

  history.push('/keuwe');

  const takeImage = screen.getByRole('img',
    { src: 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif' });
  expect(takeImage).toBeInTheDocument();
});
