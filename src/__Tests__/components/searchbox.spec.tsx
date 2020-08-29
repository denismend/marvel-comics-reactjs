import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';

import api from '../../services/api.marvel';

import SearchBox from '../../components/SearchBox';

const apiMock = new MockAdapter(api);

interface Character {
  id: number;
  name: string;
}

describe('SearchBox Component', () => {
  it('should be to handler the SearchBox', () => {
    const { getByTestId } = render(<SearchBox />);

    expect(getByTestId('SearchBox')).toBeTruthy();
  });
});
