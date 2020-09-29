import React from 'react';

import { render, screen } from '@testing-library/react';

import RandomQuote from './RandomQuote';

test('should render without crashing', () => {
  render(<RandomQuote />);
});
