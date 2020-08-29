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
`;

export const CarouselView = styled(Carousel)``;

export const ComicCard = styled.div<ComicCardProps>`
  ${props =>
    css`
      background: ${props.comicImg};
    `}

  height: 200px;
  width: 190px;
  margin: 6px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  transition: opacity 1s;
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }

  cursor: pointer;

  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 420px) {
    width: 145px;
  } ;
`;

export const ComicInfo = styled.div`
  padding: 5px;
  flex: 1;
  background: var(--color-info-card);
  /* opacity: 40%; */
  color: var(--color-white);
`;
