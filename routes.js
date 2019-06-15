const routes = require('next-routes')();

routes
  .add('/test/at/:address', '/test/show')
  .add('/wallets/:address', '/campaign/show');


module.exports = routes;