import { render, screen } from '@testing-library/react';
import Empty from './Empty';

describe('Empty Component', () => {
  const mockText = 'Custom Text';

  test('renders without crashing', () => {
    render(<Empty text={mockText} />);
    const emptyComponent = screen.getByText('No Data');
    expect(emptyComponent).toBeInTheDocument();
  });

  test('displays provided text', () => {
    render(<Empty text={mockText} />);
    const customText = screen.getByText(mockText);
    expect(customText).toBeInTheDocument();
  });

  test('renders children', () => {
    render(
      <Empty text={mockText}>
        <div>Child Component</div>
      </Empty>
    );
    const childComponent = screen.getByText('Child Component');
    expect(childComponent).toBeInTheDocument();
  });

  test('renders Android icon', () => {
    render(<Empty text={mockText} />);
    const androidIcon = screen.getByTestId('AndroidIcon');
    expect(androidIcon).toBeInTheDocument();
  });
});
