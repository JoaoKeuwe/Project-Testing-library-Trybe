import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste se é exibido na tela a mensagem No favorite pokemon found', () => {
  beforeEach(() => {
    const { history } = renderWithRouter(<App />);
    history.push('/keuwe');
  });

  test('teste se a pagina contém um h2 com o texto page requested not found', () => {
    const title = screen.getByRole('heading', { name: /page/i });

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Page requested not found');
  });

  test('teste se a página renderiza a imagem', () => {
    const image = screen.getByAltText(/pikachu/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
