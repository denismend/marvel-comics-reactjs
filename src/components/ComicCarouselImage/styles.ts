import styled, { css } from 'styled-components';

interface ComicCardProps {
  comicImg: string;
}

export const Container = styled.div<ComicCardProps>`
  ${props =>
    css`
      background: ${props.comicImg};
    `}

  height: 400px;
  width: 300px;
  margin: 6px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
