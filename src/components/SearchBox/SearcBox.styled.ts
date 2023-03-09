import styled from 'styled-components';

export const StyledSearchBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 2px;
  padding: 1.4rem 2rem 1.6rem;
  background: rgba(57, 63, 84, 0.8);
  border-bottom: solid 2px ${({ theme }) => theme.colors?.secondary?.contrastText}
`;

export const StyledSearchBoxInput = styled.input`
  border-style: none;
  background: transparent;
  outline: none;
  flex-grow: 1;
  color: #bfd2ff;
  font-size: 1.2rem;
  line-height: 2.2rem;
  vertical-align: middle;
  &::-webkit-input-placeholder {
    color: #7881a1;
  }
`;

export const StyledSearchBoxButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  outline: none;
  color: #7881a1;
  font-size: 2rem;
  line-height: 2.4rem;
  vertical-align: middle;
  transition: color .25s;
  cursor: pointer;
  &:hover {
    color: #bfd2ff;
  }
`;
