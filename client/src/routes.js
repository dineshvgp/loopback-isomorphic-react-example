import React from 'react';
import Router from 'react-router';
import AppContainer from 'components/AppContainer';

const { DefaultRoute, Route } = Router;

const routes = (
  <Route name="app" path="/" handler={AppContainer}>
    <Route name="article" path="/article/:id" handler={AppContainer}/>
    <DefaultRoute name="default" handler={AppContainer}/>
  </Route>
);

export default routes;
