import React from 'react';
import Router from 'react-router';
import AppContainer from 'components/AppContainer';
import Users from 'components/Users';
import Reviews from 'components/Reviews';

const { DefaultRoute, Route } = Router;

const routes = (
  <Route handler={AppContainer}>
    <Route path='users' handler={Users} />
    <Route path='reviews' handler={Reviews} />
  </Route>
);

export default routes;
