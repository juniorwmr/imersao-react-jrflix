import React from 'react';

import { Container, ButtonStyle } from './styles';

interface Button {
  url: string,
  name: string,
  backgroundColor: string,
}

const Button: React.FC<Button> = ({ url, name, backgroundColor }) => {
  return (
    <Container style={{ backgroundColor }}>
      <ButtonStyle as="a" href={url}>{name}</ButtonStyle>
    </Container>
  );
}

export default Button;