import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import marvelLogoImg from '../../assets/MarvelLogo.svg';

const Header: React.FC = () => (
  <Container>
    <Content>
      <Link to="/">
        <img
          height="40"
          src={marvelLogoImg}
          role="presentation"
          alt="MarvelLogo"
        />
      </Link>
    </Content>
  </Container>
);

export default Header;
