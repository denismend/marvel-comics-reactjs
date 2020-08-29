import React from 'react';
import { useHistory } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { ComicState } from '../../stores/comic/actionTypes';

import { ComicCarouselImage } from '../../components/ComicCarouselImage';

import { Container, CarouselView, ComicInfo, InfoView } from './styles';

const ComicDetails: React.FC = () => {
  const comic = useSelector((state: ComicState) => state.comic);

  const history = useHistory();

  if (!comic.id) {
    history.push('/');
    return <p>Error</p>;
  }

  const {
    images: comicImages,
    description,
    characters,
    creators,
    thumbnail,
  } = comic;

  Object.assign(comicImages, { ...thumbnail });

  return (
    <Container>
      <CarouselView>
        {comicImages.map(comicImage => (
          <ComicCarouselImage
            key={comicImage.path}
            comicImg={`url(${comicImage.path}.${comicImage.extension})`}
          />
        ))}
      </CarouselView>

      <p>{description || 'No Description!'}</p>

      <ComicInfo>
        <InfoView>
          <h2>Creator(s)</h2>
          {creators.items.length > 0 ? (
            creators.items.map(creator => (
              <p key={creator.name}>{creator.name}</p>
            ))
          ) : (
            <p>No Creators</p>
          )}
        </InfoView>

        <InfoView>
          <h2>Character(s)</h2>
          {characters.items.length > 0 ? (
            characters.items.map(character => (
              <p key={character.name}>{character.name}</p>
            ))
          ) : (
            <p>No Characters</p>
          )}
        </InfoView>
      </ComicInfo>
    </Container>
  );
};

export default ComicDetails;
