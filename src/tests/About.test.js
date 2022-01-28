import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('Teste se a página contém as informações sobre a Pokédex.', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
});
