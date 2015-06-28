const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({
  changeOrigin: true,
  ws: true
});

module.exports = function (app) {
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://127.0.0.1:3001'
    });
  });
  app.all('/socket.io*', function (req, res) {
    proxy.web(req, res, {
      target: 'http://127.0.0.1:3001'
    });
  });

  proxy.on('error', function(e) {
    // Just catch it
  });

  app.get('/ping', function (req, res) {
    res.send('pong');
  });
}
