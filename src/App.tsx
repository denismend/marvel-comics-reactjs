import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './middleware/axios.interceptor';

import GlobalStyle from './styles/global';

import api from './services/api.marvel';

function App() {

  useEffect(() => {
    api.get(`characters?offset=10`).then(response => {
      console.log(response.data);
    });
  }, [])

  return (
    <BrowserRouter>
      <>
        <h1>Teste</h1>
        <GlobalStyle />
      </>
    </BrowserRouter>


  );
}

export default App;
