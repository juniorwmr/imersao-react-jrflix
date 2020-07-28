import React from 'react';

import { GlobalStyle } from './styles/GlobalStyle';

import { Container } from './styles';

import Menu from './components/Menu';
import { categorias } from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <Container>
      <Menu />
      <BannerMain
        videoTitle={categorias[0].videos[0].titulo}
        url={categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área de Programação."}
      />

      {
        categorias.map((item, index) => (
          <Carousel
            ignoreFirstVideo
            category={categorias[index]}
          />
        ))
      }

      <Footer />
      <GlobalStyle />
    </Container>
  );
}

export default App;
