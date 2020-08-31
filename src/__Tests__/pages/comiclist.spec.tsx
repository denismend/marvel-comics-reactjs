import React from 'react';
import { render } from '@testing-library/react';

import ComicList from '../../pages/ComicList';
import api from '../../services/api.marvel';

interface Character {
  id: number;
  name: string;
}

// const apiMock = new AxiosMock(api);

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockHistoryPush,
    }),
  };
});

jest.mock('react-redux', () => {
  return {
    useDispatch: () => jest.fn(),
  };
});

jest.mock('../../hooks/pagination', () => {
  return {
    usePagination: () => ({
      comics: [
        {
          id: 1,
          title: 'HULK #1',
          thumbnail: {
            extension: 'jpg',
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/90/4bc6353e5fc56',
          },
          description: 'Hulk Comix #1',
        },
        {
          id: 2,
          title: 'X-MEN #1',
          thumbnail: {
            extension: 'jpg',
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/90/4bc6353e5fc56',
          },
          description: 'Hulk Comix #1',
        },
      ],
      page: 1,
      totalComics: 2,
    }),
  };
});

describe('ComicList Page', () => {
  it('should be able to list comics from api', async () => {
    const { getByText } = render(<ComicList />);

    expect(getByText('HULK #1')).toBeTruthy();
    expect(getByText('X-MEN #1')).toBeTruthy();
  });
});
