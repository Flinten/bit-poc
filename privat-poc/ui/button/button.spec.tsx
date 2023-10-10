import React from 'react';
import { render } from '@testing-library/react';
import { BasicButton } from './button.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicButton />);
  const rendered = getByText('This is a button2');
  expect(rendered).toBeTruthy();
});
