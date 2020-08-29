import styled, { css } from 'styled-components';

import Carousel from 'react-material-ui-carousel';

interface ComicCardProps {
  comicImg: string;
}

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p {
    padding: 20px;
  }
`;

export const CarouselView = styled(Carousel)`
  flex: 1;
`;

export const ComicInfo = styled.div`
  width: 100%;
  max-width: 400px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 70px;
`;

export const InfoView = styled.div`
  display: flex;
  flex-direction: column;
`;
