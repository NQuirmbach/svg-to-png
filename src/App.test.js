import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const header = getByText(/SVG to PNG Converter/i);
  expect(header).toBeInTheDocument();
});
