import React from 'react';
import Router from 'react-router';
import httpProxy from 'http-proxy';
import reactRoutes from 'common/react/routes';

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

      const Review = app.models.Review;

      // Example of how to retrieve a model
      Review.findById(1).then(function(model) {
        res.render('index', {
          markup: html,
          bootstrap: JSON.stringify({
            comments: model.comments
          })
        });
      });

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
