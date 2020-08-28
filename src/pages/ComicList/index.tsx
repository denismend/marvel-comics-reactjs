import React, { useEffect, useState } from 'react';

import api from '../../services/api.marvel';
import Header from '../../components/Header';
import NoResults from '../../components/NoResults';

import {
  Container,
  Content,
  ComicCard,
  ComicInfo,
  LoadingView,
} from './styles';
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
  const [loading, setLoading] = useState(true);
  const [noResults, setNoResults] = useState(false);

  const { page, setTotalComics, characterSearch } = usePagination();

  useEffect(() => {
    const offset = `&offset=${10 * (page - 1)}`;

    let characterFilterGet = '';
    if (!characterSearch) {
      setNoResults(true);
      return;
    }
    if (characterSearch.id) {
      characterFilterGet = `&characters=${characterSearch.id}`;
    }

    setLoading(true);

    api
      .get<ResponseApiMarvel>(`comics?limit=10${offset}${characterFilterGet}`)
      .then(({ data: { data } }) => {
        setComics([...data.results]);
        setTotalComics(data.total);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [page, setTotalComics, characterSearch]);

  return (
    <Container>
      <Header />
      <SearchBox />
      <Content>
        {loading ? (
          <>
            <LoadingView variant="rect" width={190} height={200} />
            <LoadingView variant="rect" width={190} height={200} />
            <LoadingView variant="rect" width={190} height={200} />
            <LoadingView variant="rect" width={190} height={200} />
            <LoadingView variant="rect" width={190} height={200} />
            <LoadingView variant="rect" width={190} height={200} />
            <LoadingView variant="rect" width={190} height={200} />
            <LoadingView variant="rect" width={190} height={200} />
            <LoadingView variant="rect" width={190} height={200} />
            <LoadingView variant="rect" width={190} height={200} />
          </>
        ) : noResults ? (
          <NoResults />
        ) : (
          comics.map(comic => (
            <ComicCard
              key={comic.id}
              comicImg={`url(${comic.thumbnail.path}.${comic.thumbnail.extension})`}
            >
              <ComicInfo>
                <p>{comic.title}</p>
              </ComicInfo>
            </ComicCard>
          ))
        )}
      </Content>

      <PaginationBar disabled={loading} />

      <Footer />
    </Container>
  );
};

export default ComicList;
