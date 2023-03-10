import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  gap: 1.5em;
  flex-direction: column;
  width: 100%;
  padding: 0 2em;
`;

export const GridContainer = styled.div`
  height: calc(100vh - 64px - 90px - 51px);
  overflow-y: scroll;
`;