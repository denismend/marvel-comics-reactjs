import React, { createContext, useContext, useState } from 'react';

interface PaginationContextData {
  page: number;
  setPage(page: number): void;
  totalComics: number;
  setTotalComics(total: number): void;
  characterSearch: Character | null;
  setCharacterSearch(character: Character | null): void;
}

interface Character {
  id: number;
  name: string;
}

const PaginationContext = createContext<PaginationContextData>(
  {} as PaginationContextData,
);

const PaginationProvider: React.FC = ({ children }) => {
  const [page, setPage] = useState<number>(1);
  const [totalComics, setTotalComics] = useState<number>(0);
  const [characterSearch, setCharacterSearch] = useState<Character | null>(
    {} as Character,
  );

  const data = {
    page,
    setPage,
    totalComics,
    setTotalComics,
    characterSearch,
    setCharacterSearch,
  };

  return (
    <PaginationContext.Provider value={data}>
      {children}
    </PaginationContext.Provider>
  );
};

function usePagination(): PaginationContextData {
  const context = useContext(PaginationContext);

  if (!context) {
    throw new Error('usePagination must be used within a PaginationProvider');
  }

  return context;
}

export { PaginationProvider, usePagination };
