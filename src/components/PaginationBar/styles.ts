import styled from 'styled-components';

import Pagination from '@material-ui/lab/Pagination';

export const Container = styled(Pagination)`
  .MuiPaginationItem-page.Mui-selected {
    background-color: var(--color-secundary-header);
    border: 2px solid var(--color-background-header);
  }
`;
