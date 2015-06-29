import React from 'react';
import Router from 'react-router';
import FluxComponent from 'flummox/component';
import FluxManager from 'common/react/FluxManager';
import routes from 'common/react/routes';

const flux = new FluxManager();
const actions = flux.getActions('routeActions');
const bootstrap = window.__BOOTSTRAP__ || {};

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  React.render(
    <FluxComponent flux={flux}>
      <Handler bootstrap={bootstrap} />
    </FluxComponent>
    , document.getElementById('root')
  );

  const activeRoute = actions.findActiveRoute(state.routes);

  actions.triggerRouteChange(activeRoute, state.params);
});
