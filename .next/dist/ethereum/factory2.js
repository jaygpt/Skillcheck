'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _TestFactory = require('./build2/TestFactory.json');

var _TestFactory2 = _interopRequireDefault(_TestFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_TestFactory2.default.interface), '0x0FefC7d92677BaCaea09A11b027844972c89FB1a');
//console.log(instance);
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkyLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJUZXN0IiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7Ozs7QUFFQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ2YsS0FBSyxBQUFMLE1BQVcsc0JBQUssQUFBaEIsQUFEZSxZQUVmLEFBRmUsQUFBakI7QUFJQSxBQUNBO2tCQUFlLEFBQWYiLCJmaWxlIjoiZmFjdG9yeTIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvamF5Z3B0L0Rlc2t0b3AvU2tpbGxjb2RlIn0=