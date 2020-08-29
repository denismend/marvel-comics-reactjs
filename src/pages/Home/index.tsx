import React from 'react';

import Routes from '../../routes';

import AppProvider from '../../hooks';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <AppProvider>
        <Routes />
      </AppProvider>
      <Footer />
    </>
  );
};

export default Home;
