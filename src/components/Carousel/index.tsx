import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import SliderSlick, { SliderItem } from './components/Slider';

interface ICategoria {
  titulo: string
  cor: string
  link?: string
  link_extra?: { url : string, text: string }
  videos: Array<{ url : string, titulo: string }>
}

interface IVideoInfo {
  ignoreFirstVideo: boolean
  category: ICategoria
}

const Carousel: React.FC<IVideoInfo> = ({ignoreFirstVideo,
  category}) => {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink &&
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          }
        </>
      )}
      <SliderSlick arrowColor={categoryColor}>
        {videos?.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </SliderSlick>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
