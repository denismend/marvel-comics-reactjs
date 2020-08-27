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
  background-size: cover;
  background-repeat: no-repeat;
  transition: opacity 1s;
  border-radius: 5px;

  &:hover {
    opacity: 0.75;
    transform: scale(1.05);
  }

  cursor: pointer;

  display: flex;
  align-items: flex-end;
`;

export const CharacterInfo = styled.div`
  padding: 5px;
  flex: 1;
  background: rgb(52, 34, 50, 0.4);
  /* opacity: 40%; */
  color: white;

  p {
    color: #fff;
    opacity: 100%;
  }
`;
