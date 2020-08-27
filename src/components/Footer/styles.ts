import styled from 'styled-components';

export const Container = styled.footer`
  padding: 10px
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

  a {
    color: #fff;
    font-size: 14px;
  }
`;

export const LinksMarvel = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;
