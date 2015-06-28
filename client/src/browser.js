import React from 'react';
import Router from 'react-router';
import routes from 'routes';
import FluxComponent from 'flummox/component';
import Flux from 'shared/Flux';

const flux = new Flux();
const actions = flux.getActions('RouteActions');

Router.run(routes, Router.HashLocation, function (Handler, state) {
  React.render(
    <FluxComponent flux={flux}>
      <Handler />
    </FluxComponent>
    , document.getElementById('root')
  );

  // const activeRoute = actions.findActiveRoute(state.routes);
  //
  // actions.triggerRouteChange(activeRoute, state.params);
});
