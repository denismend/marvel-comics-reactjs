import styled from 'styled-components';

export const Container = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: #342232;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  a {
    padding: 10px;
  }
`;
