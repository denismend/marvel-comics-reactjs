import React, { useMemo, useCallback } from 'react';

import { Container } from './styles';

import { usePagination } from '../../hooks/pagination';

interface PaginationProps {
  disabled: boolean;
}

const PaginationBar: React.FC<PaginationProps> = ({ disabled }) => {
  const { handleChangePage, page, totalComics } = usePagination();

  const handlePageChange = useCallback(
    (event: object, newPage: number) => {
      handleChangePage(newPage);
    },
    [handleChangePage],
  );

  const totalPaginationPages = useMemo(() => {
    return Math.ceil(totalComics.value / 10);
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
