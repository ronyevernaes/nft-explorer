import styled from 'styled-components';

export const StyledCard = styled.div`
  border-radius: 12px;
  background: ${({ theme }) => theme.colors?.secondary?.contrastText};
  color: ${({ theme }) => theme.colors?.secondary?.main};
  width: 320px;
  height: 400px;
  padding: 20px;
  opacity: 0.75;

  h3 {
    text-overflow: ellipsis;
    max-width: 280px;
  }
`;
