import styled from 'styled-components';

export const Main = styled.div`
  background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 94px;
    padding-left: 2%;
    padding-right: 2%;

  @media (max-width: 800px) {
    min-height: calc(100vh - 100px);
    padding-top: 40px;
  }
`;
