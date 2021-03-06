import styled from 'styled-components';

export const Container = styled.div`
  color: var(--white);
  border: 1px solid var(--white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;

  &:hover, &:focus {
    opacity: .5;
  }
  &:visited {
    color: var(--white);
  }

  @media (max-width: 800px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    color: var(--primary);
    background: var(--primary);
    border-radius: 0;
    border: 0;
    text-align: center;
  }
`;

export const ButtonStyle = styled.button`
`;