import React, { FC, MouseEvent, FormEvent, useState } from 'react';

import { StyledSearchBoxContainer, StyledSearchBoxInput, StyledSearchBoxButton } from './SearcBox.styled';

export interface SearchBoxProps {
  value: string;
  onChange?: (value: string) => void;
  loading?: boolean;
}

export const SearchBox: FC<SearchBoxProps> = ({ value, onChange, loading }) => {
  const [searchValue, setSearchValue] = useState<string>(value);
  const [appliedSearch, setAppliedSearch] = useState<boolean>(false);

  const hasValue = searchValue && searchValue.length > 0;
  const buttonText = appliedSearch ? 'X' : 'Go!';

  const onChangeSearchValue = (event: FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  }

  // For cleanness, this behavior should be implemented in two buttons
  const onClickSearchButton = () => {
    if (appliedSearch) {
      setSearchValue('');
      setAppliedSearch(false);
    } else {
      onChange && onChange(searchValue);
      if (hasValue) {
        setAppliedSearch(true);
      }
    }
  }

  return (
    <StyledSearchBoxContainer>
      <StyledSearchBoxInput
        value={searchValue}
        onChange={onChangeSearchValue}
        placeholder='Enter the address to look for NFTs'
        data-testid='searchbox-input'
      />

      {/* For cleanness, this behavior should be implemented in two buttons */}
      <StyledSearchBoxButton
        onClick={onClickSearchButton}
        disabled={loading}
        data-testid='searchbox-button'
      >
        {loading ? '...' : buttonText}
      </StyledSearchBoxButton>
    </StyledSearchBoxContainer>
  );
};
