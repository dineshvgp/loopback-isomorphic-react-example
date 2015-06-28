import React from 'react';
import Router from 'react-router';
import FluxComponent from 'flummox/component';
import FluxManager from 'common/FluxManager';
import routes from 'common/routes';

const flux = new FluxManager();
const actions = flux.getActions('routeActions');

Router.run(routes, Router.HashLocation, function (Handler, state) {
  React.render(
    <FluxComponent flux={flux}>
      <Handler />
    </FluxComponent>
    , document.getElementById('root')
  );

  const activeRoute = actions.findActiveRoute(state.routes);

  actions.triggerRouteChange(activeRoute, state.params);
});
