import React from 'react';

import { Container } from './styles';

interface ComicCarouselProps {
  comicImg: string;
}

export const ComicCarouselImage: React.FC<ComicCarouselProps> = ({
  comicImg,
}) => {
  return <Container comicImg={comicImg} />;
};
