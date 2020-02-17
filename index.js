const httpProxy = require('http-proxy');

httpProxy.createProxyServer({ target:'http://localhost' })
    .on('proxyRes', function(_proxyRes, req, res) {
        if (req.headers['access-control-request-method']) {
            res.setHeader('access-control-allow-methods', req.headers['access-control-request-method']);
        }
    
        if (req.headers['access-control-request-headers']) {
            res.setHeader('access-control-allow-headers', req.headers['access-control-request-headers']);
        }
    
        if (req.headers.origin) {
            res.setHeader('access-control-allow-origin', req.headers.origin);
            res.setHeader('access-control-allow-credentials', 'true');
        }
    })
    .listen(8080);