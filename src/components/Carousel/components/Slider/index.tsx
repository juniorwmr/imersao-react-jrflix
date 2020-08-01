import React from 'react';
import Slider from 'react-slick';

import { Container } from './styles';

interface SliderInfo {
  children: React.ReactNode
  arrowColor: string
}

const SliderSlick: React.FC<SliderInfo> = ({ children, arrowColor }) => {
  return (
    <Container colors={arrowColor}>
      <Slider {...{
        dots: false,
        infinite: true,
        speed: 200,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
      }}>
        {children}
      </Slider>
    </Container>
  );
}

export default SliderSlick;