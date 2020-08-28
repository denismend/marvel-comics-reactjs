import React from 'react';

import { Container, Header } from './styles';

const NoResults: React.FC = () => {
  return (
    <Container>
      <Header>No Results Found</Header>

      <p>Oh Snap. No results for </p>
    </Container>
  );
};

export default NoResults;
