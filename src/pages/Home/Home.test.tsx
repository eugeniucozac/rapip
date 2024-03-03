import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import { interceptor } from '../../api/axios';

jest.mock('../../api/axios');

describe('Home Component', () => {
  const mockData = {
    results: [
      { id: 1, title: 'Movie 1', poster_path: '/poster1.jpg', release_date: '2023-01-01' },
      { id: 2, title: 'Movie 2', poster_path: '/poster2.jpg', release_date: '2023-02-01' },
    ],
  };

  beforeEach(() => {
    interceptor.get.mockResolvedValueOnce({ data: mockData });
  });

  test('renders movies correctly', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );
    });

    const movie1 = screen.getByText('Movie 1');
    const movie2 = screen.getByText('Movie 2');

    expect(movie1).toBeInTheDocument();
    expect(movie2).toBeInTheDocument();
  });

  test('filters movies based on search input', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );
    });

    const searchInput = screen.getByPlaceholderText('Search movie');

    await act(async () => {
      searchInput.value = 'Movie 1';
      searchInput.dispatchEvent(new Event('input'));
    });

    const filteredMovie = screen.getByText('Movie 1');
    expect(filteredMovie).toBeInTheDocument();
  });
});
