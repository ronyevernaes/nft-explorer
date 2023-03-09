import React, { FC, FormEvent, useState } from 'react';

import {
  StyledSearchBoxContainer,
  StyledSearchBoxInput,
  StyledSearchBoxButton,
  StyledSearchPasteIcon,
  StyledSearchClearIcon,
} from './SearchBox.styled';

export interface SearchBoxProps {
  value: string;
  onChange?: (value: string) => void;
  loading?: boolean;
}

export const SearchBox: FC<SearchBoxProps> = ({ value, onChange, loading }) => {
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
      onChange && onChange(searchValue);
    }
  };

  return (
    <StyledSearchBoxContainer>
      <StyledSearchBoxButton
        onClick={onClickPasteButton}
        data-testid='searchbox-paste-button'
      >
        <StyledSearchPasteIcon />
      </StyledSearchBoxButton>

      <StyledSearchBoxInput
        value={searchValue}
        onChange={onChangeSearchValue}
        placeholder='Paste or type the address to look for NFTs'
        data-testid='searchbox-input'
      />

      {hasValue && <StyledSearchBoxButton
        onClick={onClickClearButton}
        data-testid='searchbox-clear-button'
      >
        <StyledSearchClearIcon />
      </StyledSearchBoxButton>}


      {/* For cleanness, this behavior should be implemented in two buttons */}
      <StyledSearchBoxButton
        onClick={onClickSearchButton}
        disabled={loading}
        data-testid='searchbox-button'
      >
        {loading ? '...' : 'Go!'}
      </StyledSearchBoxButton>
    </StyledSearchBoxContainer>
  );
};
