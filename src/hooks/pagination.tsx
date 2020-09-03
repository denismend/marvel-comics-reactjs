import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import api from '../services/api.marvel';

import { Comic } from '../stores/comic/actionTypes';

interface Character {
  id: number;
  name: string;
}

interface ResponseApiMarvel {
  code: number;
  status: string;
  data: {
    total: number;
    results: Comic[];
  };
}

interface TotalComic {
  value: number;
  backup: number;
}

interface PaginationContextData {
  page: number;
  searchTerm: string;
  setSearchTerm(term: string): void;
  loading: boolean;
  comics: Comic[];
  totalComics: TotalComic;
  setTotalComics(newTotal: TotalComic): void;
  handleSearchTerm(character: Character | null): void;
  handleChangePage(newPage: number): void;
}

const PaginationContext = createContext<PaginationContextData>(
  {} as PaginationContextData,
);

const PaginationProvider: React.FC = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState<number>(1);
  const [characterSearch, setCharacterSearch] = useState<Character | null>(
    {} as Character,
  );

  const [comics, setComics] = useState<Comic[]>([]);
  const [totalComics, setTotalComics] = useState<TotalComic>({
    value: 0,
    backup: 0,
  });

  const [loading, setLoading] = useState(false);

  const mountFilterGet = useCallback(
    (newPage: number, newCharacterToSearch: Character | null): string => {
      const offset = `&offset=${10 * (newPage - 1)}`;

      let characterFilterGet = '';
      if (newCharacterToSearch?.id) {
        characterFilterGet = `&characters=${newCharacterToSearch.id}`;
      }

      return `limit=10${offset}${characterFilterGet}`;
    },
    [],
  );

  const loadComics = useCallback(
    async (newPage: number, newCharacterToSearch: Character | null) => {
      setLoading(true);

      const filter = mountFilterGet(newPage, newCharacterToSearch);
      const response = await api.get<ResponseApiMarvel>(`comics?${filter}`);

      setLoading(false);
      const {
        data: { data },
      } = response;

      setPage(newPage);
      setCharacterSearch(newCharacterToSearch);
      setComics(data.results);
      setTotalComics(prevState => {
        return { value: data.total, backup: prevState.value };
      });
    },
    [setComics, mountFilterGet],
  );

  const handleSearchTerm = useCallback(
    (newCharacterToSearch: Character | null) => {
      if (newCharacterToSearch) {
        loadComics(1, newCharacterToSearch);
        return;
      }

      setTotalComics(prevState => {
        if (prevState.value !== 0) {
          return { value: 0, backup: prevState.value };
        }
        return prevState;
      });
    },
    [loadComics],
  );

  const handleChangePage = useCallback(
    (newPage: number) => {
      loadComics(newPage, characterSearch);
    },
    [loadComics, characterSearch],
  );

  useEffect(() => {
    loadComics(1, {} as Character);
  }, [loadComics]);

  const data = {
    page,
    searchTerm,
    setSearchTerm,
    loading,
    comics,
    totalComics,
    setTotalComics,
    handleSearchTerm,
    handleChangePage,
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
