import React, { useCallback } from 'react';

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
  const {
    setCharacterSearch,
    setPage,
    searchTerm,
    setSearchTerm,
  } = usePagination();

  const handleSearchComics = useCallback(async () => {
    if (searchTerm === '') {
      setCharacterSearch({} as Character);
      return;
    }

    const {
      data: { data },
    } = await api.get<ResponseApiMarvel>(
      `characters?nameStartsWith=${searchTerm}&limit=1`,
    );

    if (data.results.length > 0) {
      setPage(1);
      setCharacterSearch(data.results[0]);
      return;
    }

    setCharacterSearch(null);
  }, [searchTerm, setCharacterSearch, setPage]);

  return (
    <Container>
      <Content>
        <input
          value={searchTerm}
          type="text"
          placeholder="Character..."
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
