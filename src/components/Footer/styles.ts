import styled from 'styled-components';

export const Container = styled.footer`
  position: fixed;
  padding: 5px;
  left: 0;
  bottom: 0;
  width: 100%;
  background: var(--color-background-footer);
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;

  a {
    color: var(--color-white);
    font-size: 14px;
  }
`;

export const LinksMarvel = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;
