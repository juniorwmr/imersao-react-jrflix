import React from 'react';

import PageDefault from '../../components/PageDefault';
import { categorias } from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

function Home() {
  return (
    <PageDefault>
      <BannerMain
        videoTitle={categorias[0].videos[0].titulo}
        url={categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área de Programação."}
      />

      {
        categorias.map((item, index: number) => (
          <Carousel 
            ignoreFirstVideo
            category={categorias[index]}
          />
        ))
      }

    </PageDefault>
  );
}

export default Home;
