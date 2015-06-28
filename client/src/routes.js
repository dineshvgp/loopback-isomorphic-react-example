import React from 'react';
import Router from 'react-router';
import AppContainer from 'components/AppContainer';

const { DefaultRoute, Route } = Router;

const routes = (
  <Route>
    <Route path="test" handler={AppContainer}/>
    <DefaultRoute handler={AppContainer}/>
  </Route>
);

export default routes;
