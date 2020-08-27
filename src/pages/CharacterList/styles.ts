import styled, { css } from 'styled-components';

interface CharacterCardProps {
  characterImg: string;
}

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CharacterCard = styled.div<CharacterCardProps>`
  ${props =>
    css`
      background: ${props.characterImg};
    `}

  height: 210px;
  width: 200px;
  margin: 10px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: opacity 1s;

  &:hover {
    opacity: 0.6;
    transform: scale(1.1);
  }

  cursor: pointer;
`;
