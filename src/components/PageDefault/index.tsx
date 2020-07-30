import React from 'react';

import { GlobalStyle } from './GlobalStyle';
import { Main } from './styles';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

interface AuxProps {
  children: React.ReactNode;
}

const PageDefault: React.FC<AuxProps> = ({ children })  => {
  return (
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <GlobalStyle />
      <Footer />
    </>
  );
}

export default PageDefault;