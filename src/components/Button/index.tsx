import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ButtonStyle } from './styles';

interface IButton {
  url: string,
  name: string,
  backgroundColor: string,
}

const Button: React.FC<IButton> = ({ url, name, backgroundColor }) => {
  return (
    <Container style={{ backgroundColor }}>
      <ButtonStyle as={Link} to={url}>{name}</ButtonStyle>
    </Container>
  );
}

export default Button;