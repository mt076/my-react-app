import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main title', () => {
  render(<App />);
  // Verifica se o título principal, passado para o Banner, está no documento.
  // Usamos uma regex para ignorar maiúsculas/minúsculas (case-insensitive).
  const titleElement = screen.getByText(/Evolua seu Código/i);
  expect(titleElement).toBeInTheDocument();
});
