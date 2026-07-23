import { fireEvent, render, screen } from '@testing-library/react';
import App from './ephrem-portfolio';

test('renders the portfolio heading', () => {
  render(<App />);
  const heading = screen.getAllByText(/Ephrem Dushimimana/i)[0];
  expect(heading).toBeInTheDocument();
});

test('admin login does not expose a public reset shortcut', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /admin/i }));

  expect(screen.getByText(/admin access/i)).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: /reset to default password/i })).not.toBeInTheDocument();
  expect(screen.queryByText(/admin panel/i)).not.toBeInTheDocument();
});
