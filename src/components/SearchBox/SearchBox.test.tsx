import React from 'react';
import type { OwnedNft } from 'alchemy-sdk';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, act } from '@testing-library/react';

import nfts from '../../data/nfts.json';

import { SearchBox } from './SearchBox';

describe('SearchBox component', () => {
  test('renders the input and button correctly', () => {
    render(<SearchBox value='' />);
  
    const input = screen.getByTestId('searchbox-input');
    expect(input).toBeDefined();

    const button = screen.getByTestId('searchbox-button');
    expect(button).toBeDefined();
  });

  test('sends the search value to the handler when button is clicked', () => {
    const testValue = '0xE1F4D6a4f6BeA11968a13e1E4294b8FB81C2fC0d';
    const onChange = jest.fn();

    render(<SearchBox value='' onChange={onChange} />);

    const input = screen.getByTestId('searchbox-input');

    act(() => {
      fireEvent.change(input, { target: { value: testValue }});

      const button = screen.getByTestId('searchbox-button');
      button.click();
    });

    expect(onChange).toHaveBeenCalledWith(testValue);
  });
});
