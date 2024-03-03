import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Description from './Description';
import { interceptor } from '../../api/axios';
import { act } from 'react-dom/test-utils';

jest.mock('../../api/axios');

describe('Description Component', () => {
  const mockData = {
    id: 1,
    title: 'Test Movie',
    tagline: 'Test Tagline',
    poster_path: '/test_poster.jpg',
    release_date: '2024-01-01',
    runtime: 120,
    vote_average: 7.5,
    genres: [{ id: 1, name: 'Action' }, { id: 2, name: 'Drama' }],
    production_companies: [{ logo_path: '/company_logo.jpg', name: 'Test Company' }],
    overview: 'Test Overview',
    homepage: 'https://www.testhomepage.com'
  };

  test('renders movie details', async () => {
    interceptor.get.mockResolvedValueOnce({ data: mockData });

    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/1']}>
          <Description />
        </MemoryRouter>
      );
    });

    const titles = await screen.findAllByText('Test Movie');
    const tagline = await screen.findByText('Test Tagline');
    const releaseDate = await screen.findByText('2024');
    const runtime = await screen.findByText('2h 0min');
    const voteAverage = await screen.findByText('7.5');
    const genreAction = await screen.findByText('Action');
    const genreDrama = await screen.findByText('Drama');
    const overview = await screen.findByText('Test Overview');

    expect(titles.length).toBe(2);
    expect(tagline).toBeInTheDocument();
    expect(releaseDate).toBeInTheDocument();
    expect(runtime).toBeInTheDocument();
    expect(voteAverage).toBeInTheDocument();
    expect(genreAction).toBeInTheDocument();
    expect(genreDrama).toBeInTheDocument();
    expect(overview).toBeInTheDocument();
  });
});
