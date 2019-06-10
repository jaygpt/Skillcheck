'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _College = require('./build/College.json');

var _College2 = _interopRequireDefault(_College);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_College2.default.interface), '0xBf138261B59A6D2FFaFf362b7bfD6be0165B85e5');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNvbGxlZ2UiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBb0IsQUFBcEI7Ozs7OztBQUVBLElBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDZixLQUFLLEFBQUwsTUFBVyxrQkFBUSxBQUFuQixBQURlLFlBRWYsQUFGZSxBQUFqQixBQUtBOztrQkFBZSxBQUFmIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvamF5Z3B0L0Rlc2t0b3AvU2tpbGxjb2RlIn0=