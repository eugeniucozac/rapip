import { render } from '@testing-library/react';
import Layout from './Layout';

describe('Layout component', () => {
  test('renders layout with header and children', () => {
    const { getByText } = render(
      <Layout title="Page Title">
        <div>Child Component</div>
      </Layout>
    );

    expect(getByText('Page Title')).toBeInTheDocument();
    expect(getByText('Child Component')).toBeInTheDocument();
  });
});
