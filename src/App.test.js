import { render, screen } from '@testing-library/react';
import App from './ephrem-portfolio';

test('renders the portfolio heading', () => {
  render(<App />);
  const heading = screen.getAllByText(/Ephrem Dushimimana/i)[0];
  expect(heading).toBeInTheDocument();
});
