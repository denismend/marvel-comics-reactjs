import React from 'react';

import { Container, Content, IconInfoContainer } from './styles';

const SearchBox: React.FC = () => {
  return (
    <Container>
      <Content>
        <input type="text" placeholder="Personagem..." />
      </Content>
      <IconInfoContainer fontSize="large" />
    </Container>
  );
};

export default SearchBox;
