import React, { useState, useEffect } from 'react';

import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import categoriasRepository from '../../repositories/categories';

interface ICategoria {
  id?: number
  title: string
  color: string
  link_extra: {
    description: string
    url: string
  }
  videos: Array<{ url: string, title: string }>
}

const Home: React.FC = () => {
  const [categories, setCategories] = useState<ICategoria[]>();

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then(categoriesWithVideos => {
        setCategories(categoriesWithVideos);
      })
  }, [])

  return (
    <PageDefault>
      <BannerMain
        videoTitle={categories && categories[0].videos[0].title}
        url={categories && categories[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área de Programação."}
      />
      {
        categories?.map((item, index: number) => (
          <div key={index}>
            <Carousel
              ignoreFirstVideo
              category={item}
            />
          </div>
        ))
      }

    </PageDefault>
  );
}

export default Home;
