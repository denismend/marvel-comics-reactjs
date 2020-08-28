import React from 'react';

import { PaginationProvider } from './pagination';

const AppProvider: React.FC = ({ children }) => (
  <PaginationProvider>{children}</PaginationProvider>
);

export default AppProvider;
