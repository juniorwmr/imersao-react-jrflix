import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, Img } from './styles';
import Button from '../Button';

const Menu: React.FC = () => {
  return (
    <Nav>
      <Link to='/'>
        <Img src={require('../../assets/img/logo.png')} alt="Logo" />
      </Link>
      <Button name="Vídeo Novo" url='/cadastro/video' backgroundColor="var(--black);" />
    </Nav>
  );

}

export default Menu;