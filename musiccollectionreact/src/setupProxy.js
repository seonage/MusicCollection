const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/artist',
      createProxyMiddleware({
        target: 'https://music-collection-seonage.herokuapp.com/',
        changeOrigin: true,
      }),
      
    );

    app.use(
      '/album',
      createProxyMiddleware({
        target: 'https://music-collection-seonage.herokuapp.com/',
        changeOrigin: true,
      }),
      
    );
    
  };