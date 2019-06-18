const routes = require('next-routes')();

routes
  .add('/test/at/:address', '/test/show')
  .add('/wallets/:address', '/campaign/show')
  .add('/test/at/:address/addnew', '/test/edit')
  .add('/test/at/:address/attempt', '/test/attempt')
  .add('/test/at/:address/response', '/test/res/response')
  .add('/test/at/:address/res/:personal','/test/res/personal')

module.exports = routes;