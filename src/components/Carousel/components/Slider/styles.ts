
import styled from 'styled-components';

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

export const Container = styled.ul`
  padding: 0;
  margin-left: 15px;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: -32px;
    
  }

  .slick-next {
    right: 10px;
  }

  .slick-next:before,
  .slick-prev:before {
    color: ${(props: { colors: string }) => props.colors};
    box-shadow: 0 0 5px 0 #fff;
    border-radius: 20px;
  }
`;