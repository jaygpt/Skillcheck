'use strict';

var routes = require('next-routes')();

routes.add('/test/at/:address', '/test/show').add('/wallets/:address', '/campaign/show').add('/test/at/:address/addnew', '/test/edit').add('/test/at/:address/attempt', '/test/attempt').add('/test/at/:address/response', '/test/res/response').add('/test/at/:address/res/:personal', '/test/res/personal').add('/test/at/:address/finalize', '/test/finalize');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNHLEFBREgsSUFDTyxBQURQLHFCQUM0QixBQUQ1QixjQUVHLEFBRkgsSUFFTyxBQUZQLHFCQUU0QixBQUY1QixrQkFHRyxBQUhILElBR08sQUFIUCw0QkFHbUMsQUFIbkMsY0FJRyxBQUpILElBSU8sQUFKUCw2QkFJb0MsQUFKcEMsaUJBS0csQUFMSCxJQUtPLEFBTFAsOEJBS3FDLEFBTHJDLHNCQU1HLEFBTkgsSUFNTyxBQU5QLG1DQU15QyxBQU56QyxzQkFPRyxBQVBILElBT08sQUFQUCw4QkFPcUMsQUFQckM7O0FBVUEsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9qYXlncHQvRGVza3RvcC9Ta2lsbGNvZGUifQ==