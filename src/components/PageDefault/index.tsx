import React from 'react';

import { GlobalStyle } from './GlobalStyle';
import { Main } from './styles';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const PageDefault: React.FC = ({ children }) => {
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