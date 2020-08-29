import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Home from './pages/Home';

const App: React.FC = () => (
  <BrowserRouter>
    <Home />

    <GlobalStyle />
  </BrowserRouter>
);

export default App;
