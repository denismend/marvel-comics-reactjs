import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as comixActions from '../../stores/comic/actions';

import api from '../../services/api.marvel';
import Header from '../../components/Header';
import NoResults from '../../components/NoResults';

import Footer from '../../components/Footer';
import SearchBox from '../../components/SearchBox';
import PaginationBar from '../../components/PaginationBar';
import { ComicCard } from '../../components/ComicCard';

import { usePagination } from '../../hooks/pagination';
import { Comic } from '../../stores/comic/actionTypes';

import { Container, Content, LoadingView } from './styles';

interface ResponseApiMarvel {
  code: number;
  status: string;
  data: {
    total: number;
    results: Comic[];
  };
}

const ComicList: React.FC = () => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [loading, setLoading] = useState(true);
  const [noResults, setNoResults] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch();

  const { page, setTotalComics, characterSearch } = usePagination();

  useEffect(() => {
    setNoResults(false);

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
        setComics(data.results);
        setTotalComics(data.total);
        setLoading(false);

        if (data.total === 0) {
          setNoResults(true);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  }, [page, setTotalComics, characterSearch]);

  const handleClickComicCard = useCallback(
    (comic: Comic) => {
      // dispatch to reducer and distribute
      dispatch(comixActions.setComic(comic));
      history.push('/details');
    },
    [dispatch, history],
  );

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
              comic={comic}
              click={handleClickComicCard}
            />
          ))
        )}
      </Content>

      {!noResults && <PaginationBar disabled={loading} />}

      <Footer />
    </Container>
  );
};

export default ComicList;
