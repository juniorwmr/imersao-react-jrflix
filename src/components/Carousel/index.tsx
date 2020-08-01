import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import SliderSlick from './components/Slider';
import { SliderItem } from './components/Slider/styles';

interface ICategoria {
  title: string
  color: string
  link?: string
  link_extra?: { url: string, description: string }
  videos: Array<{ url: string, title: string }>
}

interface IVideoInfo {
  ignoreFirstVideo: boolean
  category: ICategoria
}

const Carousel: React.FC<IVideoInfo> = ({ ignoreFirstVideo,
  category }) => {
  const categoryTitle = category.title;
  const categoryColor = category.color;
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
              {categoryExtraLink.description}
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
            <div key={index}>
              <SliderItem key={video.title}>
                <VideoCard
                  videoTitle={video.title}
                  videoURL={video.url}
                  categoryColor={categoryColor}
                />
              </SliderItem>
            </div>
          );
        })}
      </SliderSlick>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
