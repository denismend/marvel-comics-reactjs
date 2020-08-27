import React, { useEffect, useState } from 'react';

import api from '../../services/api.marvel';
import Header from '../../components/Header';

import { Container, CharacterCard, CharacterInfo } from './styles';
import Footer from '../../components/Footer';

interface MarvelCharacter {
  title: string;
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
      .get<ResponseApiMarvel>(`comics?limit=10`)
      .then(({ status, data: { data } }) => {
        console.log(data);
        setCharacters(data.results);
      });
  }, []);

  return (
    <Container>
      <Header />
      {characters.map(character => (
        <CharacterCard
          key={character.title}
          characterImg={`url(${character.thumbnail.path}.${character.thumbnail.extension})`}
        >
          <CharacterInfo>
            <p>{character.title}</p>
          </CharacterInfo>
        </CharacterCard>
      ))}

      <Footer />
    </Container>
  );
};

export default CharacterList;
