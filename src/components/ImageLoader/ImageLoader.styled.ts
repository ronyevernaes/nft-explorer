import styled from 'styled-components';

export const StyledImageContainer = styled.div`
  border-radius: 12px;
  min-height: 0px;
  max-width: 300px;
  max-height: 300px;
  text-align: center;

  img {
    max-width: 280px;
    max-height: 280px;
    border-radius: 12px;
    object-fit: cover;
  }
`;
