import React from 'react';
import Router from 'react-router';
import AppContainer from 'components/AppContainer';
import CoffeeShops from 'components/CoffeeShops';
import Reviews from 'components/Reviews';
import Test from 'components/Test';
import Test2 from 'components/Test2';

const { DefaultRoute, Route } = Router;

const routes = (
  <Route handler={AppContainer}>
    <Route path='coffeeshops' handler={CoffeeShops} />
    <Route path='reviews' handler={Reviews} />
  </Route>
);

export default routes;
