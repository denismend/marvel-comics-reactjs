import React, { useState } from 'react';

import { usePagination } from '../../hooks/pagination';

import { Container, Header } from './styles';

interface Character {
  id: number;
  name: string;
}

const NoResults: React.FC = () => {
  const { searchTerm, setSearchTerm, setCharacterSearch } = usePagination();

  const handleGoBack = (): void => {
    setSearchTerm('');
    setCharacterSearch({} as Character);
  };

  const [term] = useState(searchTerm);

  return (
    <Container>
      <Header>
        {'No Results Found for term '}
        {term}
        !!
      </Header>

      <p>
        {'You cound try another character like "Hulk" '}
        {'or you if preffer '}
        <button type="button" onClick={handleGoBack}>
          Click here
        </button>
        {' to go back to list '}
      </p>
    </Container>
  );
};

export default NoResults;
