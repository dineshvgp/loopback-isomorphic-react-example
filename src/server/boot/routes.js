import React from 'react';
import Router from 'react-router';
import httpProxy from 'http-proxy';
import reactRoutes from 'common/react/routes';
import Test from 'client/components/Test';
import Test2 from 'client/components/Test2';

const proxy = httpProxy.createProxyServer({
  changeOrigin: true,
  ws: true
});

export default function routes(app) {

  app.get('/*', function (req, res) {
    const location = req.path;

    Router.run(reactRoutes, location, function (Handler) {
      const html = React.renderToString(
        <Handler />
      );

      res.render('index', {
        markup: html,
        bootstrap: JSON.stringify({
          testing: 'this'
        })
      });
    });
  });

  app.get('/test', function (req, res) {
    res.render('index', {
      markup: React.renderToString(<Test />),
      bootstrap: JSON.stringify({
        testing: 'this'
      })
    });
  });

  app.get('/test2', function (req, res) {
    res.render('index', {
      markup: React.renderToString(<Test2 />),
      bootstrap: JSON.stringify({
        testing: 'this'
      })
    });
  });

  // Webpack related assets
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://127.0.0.1:3001'
    });
  });

  // Webpack HMR config
  app.all('/socket.io*', function (req, res) {
    proxy.web(req, res, {
      target: 'http://127.0.0.1:3001'
    });
  });

  proxy.on('error', function() {
    // Just catch it
  });
}
