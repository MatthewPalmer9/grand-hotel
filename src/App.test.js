import { render, screen } from '@testing-library/react';
import App from './App';

test('Welcome message appears', () => {
  render(<App />);
  const welcomeMessage = screen.getByText(/Welcome to Grand Hotel/i);
  expect(welcomeMessage).toBeInTheDocument();
});
