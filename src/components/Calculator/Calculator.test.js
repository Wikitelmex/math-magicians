import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from './Calculator';

describe('<Calculator />', () => {
  test('it should mount', () => {
    render(<Calculator />);

    const calculator = screen.getByTestId('Calculator');

    expect(calculator).toBeInTheDocument();
  });
});
