import styled from 'styled-components';

export const StyledModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const StyledModal = styled.div`
  width: 50em;
  padding: 1em 2em;
  border-radius: 0.4em;
  color: ${({ theme }) => theme.colors?.secondary?.main};
  background: ${({ theme }) => theme.colors?.secondary?.contrastText};
  position: relative;
  overflow: hidden;
`;

export const StyledModalTitle = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    color: ${({ theme }) => theme.colors?.primary?.main}
  }
`;

export const StyledModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25em;

  label {
    margin-top: 0.50em;
    font-size: 1em;
    font-weight: 900;
    color: ${({ theme }) => theme.colors?.secondary?.main}
  }

  span {
    font-size: 0.9em;
    font-weight: 400;
    text-align: justified;
  }
  max-height: calc(100vh - 2em)
  overflow-y: scroll;
`;

export const StyledModalActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5em;
`;

export const StyledBaseButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors?.secondary?.main};
  line-height: 2rem;
  vertical-align: middle;
  transition: color .25s;
  cursor: pointer;
  &:hover {
    color: #bfd2ff;
  }
`;

export const StyledActionButton = styled.button`
  padding: 0.25em;
  background: ${({ theme }) => theme.colors?.primary?.main};
  border: none;
  border-radius: 0.4em;
  width: 250px;
  color: ${({ theme }) => theme.colors?.primary?.contrastText};
  font-size: 1rem;
  line-height: 2.4rem;
  vertical-align: middle;
  transition: color .25s;
  cursor: pointer;
  &:hover {
    color: #bfd2ff;
  }
`;

