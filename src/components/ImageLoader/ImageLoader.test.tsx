import React from 'react';
import type { OwnedNft } from 'alchemy-sdk';
import { render, screen } from '@testing-library/react';

import { ImageLoader } from './ImageLoader';

import nfts from '../../data/nfts.json';

describe('ImageLoader component', () => {
  test('renders the image correctly', () => {
    const nft = nfts[0] as unknown as OwnedNft;
  
    render(<ImageLoader url={nft.rawMetadata?.image || ''} alt={nft.rawMetadata?.name || ''} />);
  
    const img = screen.getByTestId('image-loader-img') as HTMLImageElement;
    expect(img.src).toBe(nft.rawMetadata?.image);
    expect(img.alt).toBe(nft.rawMetadata?.name);
  });
});
