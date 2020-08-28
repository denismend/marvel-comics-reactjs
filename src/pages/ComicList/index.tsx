import React, { useEffect, useState } from 'react';

import Pagination from '@material-ui/lab/Pagination';
import api from '../../services/api.marvel';
import Header from '../../components/Header';

import { Container, Content, ComicCard, ComicInfo } from './styles';
import Footer from '../../components/Footer';
import SearchBox from '../../components/SearchBox';

interface MarvelComic {
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
    results: MarvelComic[];
  };
}

const ComicList: React.FC = () => {
  const [Comics, setComics] = useState<MarvelComic[]>([]);

  useEffect(() => {
    api
      .get<ResponseApiMarvel>(`comics?limit=10`)
      .then(({ status, data: { data } }) => {
        console.log(data);
        setComics(data.results);
      });
  }, []);

  return (
    <Container>
      <Header />
      <SearchBox />
      <Content>
        {Comics.map(comic => (
          <ComicCard
            key={comic.title}
            comicImg={`url(${comic.thumbnail.path}.${comic.thumbnail.extension})`}
          >
            <ComicInfo>
              <p>{comic.title}</p>
            </ComicInfo>
          </ComicCard>
        ))}
      </Content>

      <Pagination count={10} color="primary" />

      <Footer />
    </Container>
  );
};

export default ComicList;
