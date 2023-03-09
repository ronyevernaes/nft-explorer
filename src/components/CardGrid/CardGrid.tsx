import React, { FC } from 'react';
import type { OwnedNft } from 'alchemy-sdk';

import { Card } from '../Card/Card';
import { StyledCardGridContainer } from './CardGrid.styled';

export interface CardGridProps {
  nfts: OwnedNft[]
  onClick?: (nft: OwnedNft) => void;
}

export const CardGrid: FC<CardGridProps> = ({ nfts, onClick }) => {
  return (
    <StyledCardGridContainer>
      {nfts.map(nft => (
        <Card
          nft={nft}
          key={nft.rawMetadata?.name}
          onClick={() => onClick && onClick(nft)}
        />
      ))}
    </StyledCardGridContainer>
  );
};
