import React, { useEffect, useState } from 'react';

import { Container, CharacterCard } from './styles';
import api from '../../services/api.marvel';

interface MarvelCharacter {
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface ResponseApiMarvel {
  code: number;
  status: string;
  data: {
    results: MarvelCharacter[];
  };
}

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<MarvelCharacter[]>([]);

  useEffect(() => {
    api
      .get<ResponseApiMarvel>(`characters?offset=10&limit=10`)
      .then(({ status, data: { data }, data: t }) => {
        console.log(t);
        setCharacters(data.results);
      });
  }, []);

  return (
    <Container>
      {characters.map(character => (
        <CharacterCard
          key={character.name}
          characterImg={`url(${character.thumbnail.path}.${character.thumbnail.extension})`}
        >
          <p>{character.name}</p>
        </CharacterCard>
      ))}
    </Container>
  );
};

export default CharacterList;
