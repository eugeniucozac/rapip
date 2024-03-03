import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App component', () => {
  test('renders Home component when path is "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  test('renders Description component when path is "/:id"', () => {
    render(
      <MemoryRouter initialEntries={['/123']}>
        <App />
      </MemoryRouter>
    );
  });
});
