const routes = require('next-routes')();

routes
  .add('/test/at/:address', '/test/show')
  .add('/wallets/:address', '/campaign/show')
  .add('/test/at/:address/addnew', '/test/edit')

module.exports = routes;