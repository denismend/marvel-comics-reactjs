import React from 'react';
import { render } from '@testing-library/react';

import SearchBox from '../../components/SearchBox';

describe('SearchBox Component', () => {
  it('should be to handler the SearchBox', () => {
    const { getByTestId } = render(<SearchBox />);

    expect(getByTestId('SearchBox')).toBeTruthy();
  });
});
