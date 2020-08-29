import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { ComicState } from '../../stores/comic/actionTypes';

import Header from '../../components/Header';

import Footer from '../../components/Footer';

import { Container, CarouselView, ComicCard, ComicInfo } from './styles';

const ComicDetails: React.FC = () => {
  const comicSelected = useSelector((state: ComicState) => state.comic);

  console.log(comicSelected);

  return (
    <Container>
      <Header />
      <CarouselView>
        <ComicCard
          key={comicSelected.id}
          comicImg={`url(${comicSelected.thumbnail.path}.${comicSelected.thumbnail.extension})`}
        >
          <ComicInfo>
            <p>{comicSelected.title}</p>
          </ComicInfo>
        </ComicCard>
      </CarouselView>
      <Footer />
    </Container>
  );
};

export default ComicDetails;
