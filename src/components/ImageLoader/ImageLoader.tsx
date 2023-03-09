import React, { FC } from 'react';

import { StyledImageContainer } from './ImageLoader.styled';

export interface ImageLoaderProps {
  url: string;
  alt: string;
  onError?: () => void;
}

export const ImageLoader: FC<ImageLoaderProps> = ({ url, alt, onError }) => {
  return (
    <StyledImageContainer>
      <img src={url} alt={alt} onError={onError} data-testid='image-loader-img' />
    </StyledImageContainer>
  );
};
