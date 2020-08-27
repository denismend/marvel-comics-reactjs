import React, { useMemo } from 'react';

import marvelLogoFooterImg from '../../assets/MarvelLogoFooter.svg';

import { Container, Content } from './styles';

const Footer: React.FC = () => {
  const currentDate = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <Container>
      <Content>
        <img
          className="logo"
          width="120"
          alt="MarvelLogoFooter"
          src={marvelLogoFooterImg}
        />
        <br />
        <a href="http://marvel.com">
          {'Data provided by Marvel. © '}
          {currentDate}
          {' MARVEL'}
        </a>
        <br />
        <a href="http://developer.marvel.com">developer.marvel.com</a>
      </Content>
    </Container>
  );
};

export default Footer;
