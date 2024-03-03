import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  const mockTitle = 'Test Title';

  test('renders with provided title', () => {
    render(<Header title={mockTitle} />);

    expect(screen.getByText(mockTitle)).toBeInTheDocument();
  });
});
