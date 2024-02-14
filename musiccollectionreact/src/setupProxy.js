const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/artist',
      createProxyMiddleware({
        target: 'http://localhost:3000',
        changeOrigin: true,
      }),
      
    );

    app.use(
      '/album',
      createProxyMiddleware({
        target: 'http://localhost:3000',
        changeOrigin: true,
      }),
      
    );
    
  };