import React, { FC, ReactNode } from 'react';
import { OwnedNft } from 'alchemy-sdk';

import { StyledXMarkIcon } from '../Icons';

import {
  StyledModalContainer,
  StyledModal,
  StyledModalTitle,
  StyledBaseButton,
  StyledModalBody,
  StyledModalActions,
  StyledActionButton,
} from './Modal.styled';

export interface ModalProps {
  open: boolean;
  nft: OwnedNft;
  ownerAddress: string;
  onClose: () => void;
};

export const Modal: FC<ModalProps> = ({ open, nft, ownerAddress, onClose }) => {
  const { rawMetadata: metadata } = nft;

  const name = metadata?.name && metadata?.name.length > 0
    ? metadata?.name
    : `${nft.contract.name} #${nft.tokenId}`;

  console.log(nft);

  return (
    <>{open &&
      <StyledModalContainer>
        <StyledModal>
          <StyledModalTitle>
            <h3>{name}</h3>
            <StyledBaseButton onClick={onClose}>
              <StyledXMarkIcon />
            </StyledBaseButton>
          </StyledModalTitle>

          <StyledModalBody>
            <label>Collection</label>
            <span>{nft.contract.openSea?.collectionName || '-'}</span>
            <label>Description</label>
            <span>{nft.description}</span>
            <label>Owner Address</label>
            <span>{ownerAddress}</span>
          </StyledModalBody>

          <StyledModalActions>
            <StyledActionButton>Buy</StyledActionButton>
          </StyledModalActions>
        </StyledModal>
      </StyledModalContainer>
    }</>
  );
};
