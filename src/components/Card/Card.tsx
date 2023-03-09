import React, { FC, useState } from 'react';
import type { OwnedNft } from 'alchemy-sdk';

import { ImageLoader } from '../ImageLoader';

import { StyledCard } from './Card.styled';

export interface CardProps {
  nft: OwnedNft;
  onClick?: () => void;
}

export const Card: FC<CardProps> = ({ nft, onClick }) => {
  const { rawMetadata: metadata, media } = nft;
  const [isError, setIsError] = useState<boolean>(false);

  const name = metadata?.name && metadata?.name.length > 0
    ? metadata?.name
    : `${nft.contract.name} #${nft.tokenId}`;

  const image = media.length > 0
    ? media[0].gateway : metadata?.image;

  const onError = () => setIsError(true);

  if (isError) {
    console.error(
      `Error rendering NFT ${name}. URL: ${image}`
    );
    return <></>;
  }

  return (
    <StyledCard onClick={onClick}>
      <ImageLoader url={image || ''} alt={name || ''} onError={onError} />

      <h3>{name}</h3>
    </StyledCard>
  );
};
