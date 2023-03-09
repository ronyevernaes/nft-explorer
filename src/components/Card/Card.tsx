import React, { FC, useState } from 'react';
import type { OwnedNft } from 'alchemy-sdk';

import { ImageLoader } from '../ImageLoader';

import { StyledCard } from './Card.styled';

export interface CardProps {
  nft: OwnedNft;
  onClick?: () => void;
}

export const Card: FC<CardProps> = ({ nft, onClick }) => {
  const { rawMetadata: data } = nft;
  const [isError, setIsError] = useState<boolean>(false);

  const onError = () => setIsError(true);

  if (isError) {
    console.error(
      `Error rendering NFT ${data?.name}. URL: ${data?.image}`
    );
    return <></>;
  }

  return (
    <StyledCard onClick={onClick}>
      <ImageLoader
        url={data?.image || ''}
        alt={data?.name || ''}
        onError={onError}
      />

      <h3>{data?.name}</h3>
    </StyledCard>
  );
};
