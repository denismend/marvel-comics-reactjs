import React, { useMemo, useCallback } from 'react';

import { Container } from './styles';

import { usePagination } from '../../hooks/pagination';

interface PaginationProps {
  disabled: boolean;
}

const PaginationBar: React.FC<PaginationProps> = ({ disabled }) => {
  const { page, setPage, totalComics } = usePagination();

  const handlePageChange = useCallback(
    (event: object, newPage: number) => {
      setPage(newPage);
    },
    [setPage],
  );

  const totalPaginationPages = useMemo(() => {
    return Math.ceil(totalComics / 10);
  }, [totalComics]);

  return (
    <Container
      shape="rounded"
      count={totalPaginationPages}
      page={page}
      disabled={disabled}
      onChange={handlePageChange}
    />
  );
};

export default PaginationBar;
