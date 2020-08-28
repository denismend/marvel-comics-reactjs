import React, { useMemo, useCallback } from 'react';

import { Container } from './styles';

import { usePagination } from '../../hooks/pagination';

const PaginationBar: React.FC = () => {
  const { page, setPage, totalComics } = usePagination();

  const handlePageChange = useCallback(
    (event: object, newPage: number) => {
      setPage(newPage);
    },
    [setPage],
  );

  const totalPaginationPages = useMemo(() => {
    return (totalComics / 10) as number;
  }, []);

  return (
    <Container
      shape="rounded"
      count={totalPaginationPages}
      page={page}
      onChange={handlePageChange}
    />
  );
};

export default PaginationBar;
