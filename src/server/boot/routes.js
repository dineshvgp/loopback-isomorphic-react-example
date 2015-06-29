const React = require('react');
const httpProxy = require('http-proxy');
const Test = require('client/components/Test.js');
const Test2 = require('client/components/Test2.js');

const proxy = httpProxy.createProxyServer({
  changeOrigin: true,
  ws: true
});

export default function routes(app) {

  app.get('/', function (req, res) {
    res.render('index', {
      bootstrap: JSON.stringify({
        testing: 'this'
      })
    });
  });

  app.get('/test', function (req, res) {
    res.render('index', {
      initialMarkup: React.renderToString(<Test />),
      bootstrap: JSON.stringify({
        testing: 'this'
      })
    });
  });

  app.get('/test2', function (req, res) {
    res.render('index', {
      initialMarkup: React.renderToString(<Test2 />),
      bootstrap: JSON.stringify({
        testing: 'this'
      })
    });
  });

  app.get('/coffeeshops', function (req, res) {
    res.render('index', {
      test: 'does this work??'
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

  proxy.on('error', function(error) {
    // Just catch it
  });
}
