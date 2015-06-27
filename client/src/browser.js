import React from 'react';
import Router from 'react-router';
import routes from 'routes';
import Flux from 'common/Flux';
import RouteActions from 'actions/RouteActions';

const flux = new Flux();

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  React.render(<Handler/>, document.getElementById('root'));

  const activeRoute = RouteActions.findActiveRoute(state.routes);

  RouteActions.triggerRouteChange(activeRoute, state.params);
});
