import React, { useCallback, FormEvent } from 'react';

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
  const { searchTerm, setSearchTerm, handleSearchTerm } = usePagination();

  const handleSearchCharacter = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      let newCharacterToSearch = {} as Character | null;

      if (searchTerm !== '') {
        const {
          data: { data },
        } = await api.get<ResponseApiMarvel>(
          `characters?nameStartsWith=${searchTerm}&limit=1`,
        );

        newCharacterToSearch = data.total > 0 ? { ...data.results[0] } : null;
      }

      handleSearchTerm(newCharacterToSearch);
    },
    [handleSearchTerm, searchTerm],
  );

  return (
    <Container onSubmit={handleSearchCharacter} data-testid="SearchBox">
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
      <IconButtonContainer type="submit" data-testid="button">
        <SearchIcon />
      </IconButtonContainer>
    </Container>
  );
};

export default SearchBox;
