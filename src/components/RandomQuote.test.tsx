import React from 'react';

import { render, screen } from '@testing-library/react';

import RandomQuote from './RandomQuote';

test('should render without crashing', () => {
  render(<RandomQuote />);
});
test('should return portfolio link', () => {
  render(<RandomQuote />);
  expect(screen.getByRole('link', { name: /markus tryban/i }));
});
