import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Movie from './Movie';

describe('Movie component', () => {
  const movie = {
    id: 1,
    title: 'Sample Movie',
    img: 'sample.jpg',
    releaseDate: '2023-01-01',
  };

  test('renders movie card with correct props', () => {
    const { getByText, getByAltText } = render(
      <Router>
        <Movie {...movie} />
      </Router>
    );

    expect(getByText('Sample Movie')).toBeInTheDocument();
    expect(getByText('2023-01-01')).toBeInTheDocument();
    expect(getByAltText('Sample Movie')).toBeInTheDocument();
  });

  test('navigates to correct URL when clicked', () => {
    const { getByText } = render(
      <Router>
        <Movie {...movie} />
      </Router>
    );

    fireEvent.click(getByText('Sample Movie'));
    expect(window.location.pathname).toBe('/1');
  });
});