import React, { useEffect, useState } from 'react';

import api from '../../services/api.marvel';
import Header from '../../components/Header';

import { Container, CharacterCard } from './styles';
import Footer from '../../components/Footer';

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
      .then(({ status, data: { data } }) => {
        console.log(status);
        setCharacters(data.results);
      });
  }, []);

  return (
    <Container>
      <Header />
      {characters.map(character => (
        <CharacterCard
          key={character.name}
          characterImg={`url(${character.thumbnail.path}.${character.thumbnail.extension})`}
        >
          <p>{character.name}</p>
        </CharacterCard>
      ))}

      <Footer />
    </Container>
  );
};

export default CharacterList;
