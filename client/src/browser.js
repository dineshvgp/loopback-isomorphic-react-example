import React from 'react';
import Router from 'react-router';
import routes from 'routes';
import FluxComponent from 'flummox/component';
import Flux from 'common/Flux';
import RouteActions from 'actions/RouteActions';

const flux = new Flux();

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  React.render(
    <FluxComponent flux={flux}>
      <Handler />
    </FluxComponent>
  , document.getElementById('root'));

  const activeRoute = RouteActions.findActiveRoute(state.routes);

  RouteActions.triggerRouteChange(activeRoute, state.params);
});
