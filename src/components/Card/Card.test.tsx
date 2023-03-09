import React from 'react';
import type { OwnedNft } from 'alchemy-sdk';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import nfts from '../../data/nfts.json';

import { Card } from './Card';

describe('Card component', () => {
  test('renders the card correctly', () => {
    const nft = nfts[0] as unknown as OwnedNft;
  
    render(<Card nft={nft} />);
  
    const name = screen.getByText(nft.rawMetadata?.name || '');
    expect(name).toBeInTheDocument();
  });
});
