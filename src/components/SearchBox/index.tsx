import React, { useState, useCallback } from 'react';

import SearchIcon from '@material-ui/icons/Search';

import { Container, Content, IconButtonContainer } from './styles';
import api from '../../services/api.marvel';

import { usePagination } from '../../hooks/pagination';

interface Character {
  id: number;
  name: string;
}

interface ResponseApiMarvel {
  code: number;
  status: string;
  data: {
    total: number;
    results: Character[];
  };
}

const SearchBox: React.FC = () => {
  const { setCharacterSearch } = usePagination();

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchComics = useCallback(async () => {
    const {
      data: { data },
    } = await api.get<ResponseApiMarvel>(
      `characters?nameStartsWith=${searchTerm}&limit=1`,
    );

    if (data.results.length > 0) {
      setCharacterSearch(data.results[0]);
      return;
    }

    setCharacterSearch(null);
  }, [searchTerm, setCharacterSearch]);

  return (
    <Container>
      <Content>
        <input
          value={searchTerm}
          type="text"
          placeholder="Personagem..."
          onChange={e => {
            setSearchTerm(e.target.value);
          }}
        />
      </Content>
      <IconButtonContainer onClick={handleSearchComics}>
        <SearchIcon />
      </IconButtonContainer>
    </Container>
  );
};

export default SearchBox;
