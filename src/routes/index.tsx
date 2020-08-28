import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import ComicList from '../pages/ComicList';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={ComicList} />
  </Switch>
);

export default Routes;
