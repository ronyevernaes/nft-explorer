import styled from 'styled-components';

export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AppHeader = styled.header`
  min-height: 4em;
  display: flex;
  margin-left: 2em;

  h1 {
    font-size: 2em;
  }
`;

export const AppMain = styled.main`
  display: flex;
  justify-content: center;
`;

export const AppFooter = styled.footer`
  padding-top: 1em;
  padding-bottom: 1em;
  text-align: center;
  font-size: 0.9em;
  background-color: #252736};
`;