import React from 'react';
import type { OwnedNft } from 'alchemy-sdk';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import nfts from '../../data/nfts.json';

import { Modal } from './Modal';

describe('Modal component', () => {
  test('renders the modal correctly', () => {
    const nft = nfts[0] as unknown as OwnedNft;

    render(
      <Modal nft={nft} open />
    );
  
    const name = screen.getByText(nft.rawMetadata?.name || '');
    expect(name).toBeInTheDocument();
  });
});
