import React from 'react';
import Router from 'react-router';
import routes from 'routes';
import RouteActions from 'actions/RouteActions';

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  React.render(<Handler/>, document.body);

  const activeRoute = RouteActions.findActiveRoute(state.routes);

  RouteActions.triggerRouteChange(activeRoute, state.params);
});
