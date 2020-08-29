import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import ComicList from '../pages/ComicList';
import ComicDetails from '../pages/ComicDetails';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={ComicList} />
    <Route exact path="/details" component={ComicDetails} />
  </Switch>
);

export default Routes;
