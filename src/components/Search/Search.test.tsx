import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';

describe('Search Component', () => {
  const mockQuery = 'Test Query';
  const mockOnSearch = jest.fn();

  test('renders correctly with initial props', () => {
    render(
      <Search
        query={mockQuery}
        onSearch={mockOnSearch}
      />
    );

    const inputElement = screen.getByPlaceholderText('Search movie');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(mockQuery);
  });

  test('calls onSearch when input value changes', () => {
    render(
      <Search
        query={mockQuery}
        onSearch={mockOnSearch}
      />
    );

    const inputElement = screen.getByPlaceholderText('Search movie');
    fireEvent.change(inputElement, { target: { value: 'New Query' } });

    expect(mockOnSearch).toHaveBeenCalled();
  });
});
