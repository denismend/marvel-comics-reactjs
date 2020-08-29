import React, { useMemo } from 'react';

import marvelLogoFooterImg from '../../assets/MarvelLogoFooter.svg';

import { Container, Content, LinksMarvel } from './styles';

const Footer: React.FC = () => {
  const currentDate = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <Container>
      <Content>
        <img width="90" alt="MarvelLogoFooter" src={marvelLogoFooterImg} />
        <LinksMarvel>
          <a href="http://developer.marvel.com" target="blank">
            {'Data provided by Marvel. © '}
            {currentDate}
            {' MARVEL'}
          </a>
          <a href="https://github.com/denismend" target="blank">
            {'Developed with '}
            <span role="img" aria-label="heart">
              ❤️
            </span>
            {' by denismend'}
          </a>
        </LinksMarvel>
      </Content>
    </Container>
  );
};

export default Footer;
