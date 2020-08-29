import React from 'react';

import { Comic } from '../../stores/comic/actionTypes';

import { ComicCardView, ComicInfo } from './styles';

interface ComicCardProps {
  click: (comic: Comic) => void;
  comic: Comic;
}

export const ComicCard: React.FC<ComicCardProps> = ({ comic, click }) => {
  return (
    <ComicCardView
      key={comic.id}
      onClick={() => click(comic)}
      comicImg={`url(${comic.thumbnail.path}.${comic.thumbnail.extension})`}
    >
      <ComicInfo>
        <p>{comic.title}</p>
      </ComicInfo>
    </ComicCardView>
  );
};
