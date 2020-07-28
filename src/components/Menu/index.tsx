import React from 'react';

import { Nav, Img } from './styles';
import Button from '../Button';
const Menu: React.FC = () => {
  return (
    <Nav>
      <a href="/">
        <Img src={require('../../assets/img/logo.png')} alt="Logo" />
      </a>
      <Button name="Vídeo Novo" url='/' backgroundColor="var(--black);" />
    </Nav>
  );

}

export default Menu;