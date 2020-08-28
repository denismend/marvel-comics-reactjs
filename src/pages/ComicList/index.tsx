import React, { useEffect, useState } from 'react';

import api from '../../services/api.marvel';
import Header from '../../components/Header';

import { Container, Content, ComicCard, ComicInfo } from './styles';
import Footer from '../../components/Footer';
import SearchBox from '../../components/SearchBox';
import PaginationBar from '../../components/PaginationBar';

import { usePagination } from '../../hooks/pagination';

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

  const { page } = usePagination();

  useEffect(() => {
    const offset = `&offset: ${10 * (page - 1)}`;

    api
      .get<ResponseApiMarvel>(`comics?limit=10${offset}`)
      .then(({ data: { data } }) => {
        setComics(data.results);
      });
  }, [page]);

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

      <PaginationBar />

      <Footer />
    </Container>
  );
};

export default ComicList;
