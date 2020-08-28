import styled from 'styled-components';
import InfoIcon from '@material-ui/icons/Search';

export const Container = styled.form`
  position: absolute;
  top: 60px;
  display: flex;
  align-items: center;
`;

export const IconInfoContainer = styled(InfoIcon)`
  margin-left: 10px;
  cursor: pointer;
`;

export const Content = styled.div`
  position: relative;

  > input {
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
