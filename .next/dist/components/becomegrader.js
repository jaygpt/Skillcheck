'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Test = require('../ethereum/Test');

var _Test2 = _interopRequireDefault(_Test);

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jaygpt/Desktop/Skillcode/components/becomegrader.js';


var Grader = function (_Component) {
  (0, _inherits3.default)(Grader, _Component);

  function Grader() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Grader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Grader.__proto__ || (0, _getPrototypeOf2.default)(Grader)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      //wallet_address: '',
      //index: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, accounts, myWallet;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, errorMessage: '' });
                campaign = (0, _Test2.default)(_this.props.address);

                console.log(_this.props.personal);
                _context.prev = 4;
                _context.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context.sent;
                _context.next = 10;
                return _factory2.default.methods.mywallet().call({
                  from: accounts[0]
                });

              case 10:
                myWallet = _context.sent;

                console.log(myWallet);
                _context.next = 14;
                return campaign.methods.becomegrader(myWallet, _this.props.personal).send({
                  from: accounts[0]
                });

              case 14:
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context['catch'](4);

                _this.setState({ errorMessage: _context.t0.message });

              case 19:
                _this.setState({ loading: false });

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 16]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Grader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Become Grader'));
    }
  }]);

  return Grader;
}(_react.Component);

exports.default = Grader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmVjb21lZ3JhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkNhbXBhaWduIiwiZmFjdG9yeSIsIndlYjMiLCJMaW5rIiwiUm91dGVyIiwiR3JhZGVyIiwic3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJwZXJzb25hbCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwibXl3YWxsZXQiLCJjYWxsIiwiZnJvbSIsIm15V2FsbGV0IiwiYmVjb21lZ3JhZGVyIiwic2VuZCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU8sQUFBUzs7QUFDL0IsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFPLEFBQWM7Ozs7Ozs7SSxBQUV4Qjs7Ozs7Ozs7Ozs7Ozs7OzRNQUNKLEE7QUFFSTtBQUNBO29CQUhJLEFBR1UsQUFDZDtlQUFRLEEsQUFKSjtBQUFBLEFBQ0osYSxBQU1KOzJGQUFXLGlCQUFBLEFBQU8sT0FBUDtnQ0FBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtzQkFBQSxBQUFNLEFBQ047c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FBL0IsQUFBYyxBQUErQixBQUN2QztBQUhHLDJCQUdRLG9CQUFTLE1BQUEsQUFBSyxNQUh0QixBQUdRLEFBQW9CLEFBQ3JDOzt3QkFBQSxBQUFRLElBQUksTUFBQSxBQUFLLE1BSlIsQUFJVCxBQUF1QjtnQ0FKZDtnQ0FBQTt1QkFNZ0IsY0FBQSxBQUFLLElBTnJCLEFBTWdCLEFBQVM7O21CQUExQjtBQU5DLG9DQUFBO2dDQUFBO3lDQVFnQixBQUFRLFFBQVIsQUFBZ0IsV0FBaEIsQUFBMkI7d0JBQ3hDLFNBVEgsQUFRZ0IsQUFBZ0MsQUFDN0MsQUFBUztBQURvQyxBQUNuRCxpQkFEbUI7O21CQUFqQjtBQVJDLG9DQVdQOzt3QkFBQSxBQUFRLElBWEQsQUFXUCxBQUFZO2dDQVhMO2dDQVlELEFBQVMsUUFBVCxBQUFpQixhQUFqQixBQUE4QixVQUFTLE1BQUEsQUFBSyxNQUE1QyxBQUFrRCxVQUFsRCxBQUE0RDt3QkFDMUQsU0FiRCxBQVlELEFBQWlFLEFBQy9ELEFBQVM7QUFEc0QsQUFDckUsaUJBREk7O21CQVpDO2dDQUFBO0FBQUE7O21CQUFBO2dDQUFBO2dEQWlCUDs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQWpCdkIsQUFpQlAsQUFBYyxBQUFvQjs7bUJBRXBDO3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBbkJQLEFBbUJULEFBQWMsQUFBVzs7bUJBbkJoQjttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7Ozs7Ozs7OzZCQXNCRixBQUNQOzZCQUNFLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBQUEsQUFnQkU7QUFoQkY7T0FBQSxrQkFnQkUsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEO29CQUFsRDtzQkFoQkYsQUFnQkUsQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQztvQkFBQTtzQkFBQTtBQUFBO1NBbEJKLEFBQ0UsQUFpQkUsQUFHTDs7Ozs7QUFwRGtCLEEsQUF1RHJCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImJlY29tZWdyYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9qYXlncHQvRGVza3RvcC9Ta2lsbGNvZGUifQ==