import styled from 'styled-components';

import { Skeleton } from '@material-ui/lab';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 25px;
  margin-bottom: 20px;
`;

export const LoadingView = styled(Skeleton)`
  margin: 6px;

  @media screen and (max-width: 420px) {
    max-width: 145px;
  } ;
`;
