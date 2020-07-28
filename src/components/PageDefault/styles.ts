import styled from 'styled-components';

export const Main = styled.div`
  min-height: calc(100vh - 124px);
  padding-top: 94px;

  @media (max-width: 800px) {
    min-height: calc(100vh - 100px);
    padding-top: 40px;
  }
`;
