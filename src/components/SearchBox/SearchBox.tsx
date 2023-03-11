import React, { FC, FormEvent, useState } from 'react';

import { StyledClipboardIcon, StyledXMarkIcon } from '../Icons';

import {
  StyledSearchBoxContainer,
  StyledSearchBoxInput,
  StyledBaseButton,
} from './SearchBox.styled';

export interface SearchBoxProps {
  value: string;
  onSearch?: (value: string) => void;
  loading?: boolean;
}

export const SearchBox: FC<SearchBoxProps> = ({ value, onSearch, loading }) => {
  const [searchValue, setSearchValue] = useState<string>(value);

  const hasValue = searchValue && searchValue.length > 0;

  const onChangeSearchValue = (event: FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  }

  const onClickPasteButton = () => {
    navigator.clipboard.readText().then(
      (clipText) => setSearchValue(clipText || '')
    );
  };

  const onClickClearButton = () => {
    setSearchValue('');
  };

  const onClickSearchButton = () => {
    if (hasValue) {
      onSearch && onSearch(searchValue);
    }
  };

  return (
    <StyledSearchBoxContainer>
      <StyledBaseButton
        onClick={onClickPasteButton}
        data-testid='searchbox-paste-button'
      >
        <StyledClipboardIcon />
      </StyledBaseButton>

      <StyledSearchBoxInput
        value={searchValue}
        onChange={onChangeSearchValue}
        placeholder='Paste or type the address to look for NFTs'
        data-testid='searchbox-input'
      />

      {hasValue && <StyledBaseButton
        onClick={onClickClearButton}
        data-testid='searchbox-clear-button'
      >
        <StyledXMarkIcon />
      </StyledBaseButton>}

      {/* For cleanness, this behavior should be implemented in two buttons */}
      <StyledBaseButton
        onClick={onClickSearchButton}
        disabled={loading}
        data-testid='searchbox-button'
      >
        {loading ? '...' : 'Go!'}
      </StyledBaseButton>
    </StyledSearchBoxContainer>
  );
};
