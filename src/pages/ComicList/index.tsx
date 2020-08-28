import React, { useEffect, useState } from 'react';

import api from '../../services/api.marvel';
import Header from '../../components/Header';

import { Container, Content, ComicCard, ComicInfo } from './styles';
import Footer from '../../components/Footer';
import SearchBox from '../../components/SearchBox';
import PaginationBar from '../../components/PaginationBar';

import { usePagination } from '../../hooks/pagination';

interface MarvelComic {
  id: number;
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
    total: number;
    results: MarvelComic[];
  };
}

const ComicList: React.FC = () => {
  const [comics, setComics] = useState<MarvelComic[]>([]);

  const { page, setTotalComics } = usePagination();

  useEffect(() => {
    const offset = `&offset=${10 * (page - 1)}`;

    api
      .get<ResponseApiMarvel>(`comics?limit=10${offset}`)
      .then(({ data: { data } }) => {
        setComics([...data.results]);
        setTotalComics(data.total);
      });
  }, [page, setTotalComics]);

  return (
    <Container>
      <Header />
      <SearchBox />
      <Content>
        {comics.map(comic => (
          <ComicCard
            key={comic.id}
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
