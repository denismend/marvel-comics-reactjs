import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export const Container = styled.div`
  position: absolute;
  top: 55px;
  display: flex;
  align-items: center;

  .MuiIconButton-root {
    color: var(--color-black) !important;
    padding: 8px;

    :hover {
      background: var(--color-secundary-header);
    }
  }
`;

export const IconButtonContainer = styled(IconButton)`
  margin-left: 5px !important;
`;

export const Content = styled.div`
  position: relative;

  > input {
    width: 260px;
    height: 40px;
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 14px;
  }

  &:focus-within::after {
    width: calc(100%);
    height: 2px;
    content: '';
    background: var(--color-background-header);
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;
