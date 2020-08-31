import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as comixActions from '../../stores/comic/actions';

import NoResults from '../../components/NoResults';
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
  const history = useHistory();

  const dispatch = useDispatch();

  const { comics, loading, totalComics } = usePagination();

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
        ) : totalComics.value === 0 ? (
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

      {totalComics.value > 0 && <PaginationBar disabled={loading} />}
    </Container>
  );
};

export default ComicList;
