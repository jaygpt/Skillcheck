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

var _jsxFileName = '/home/jaygpt/Desktop/Skillcode/components/giveresponse.js';


var Submitresponse = function (_Component) {
  (0, _inherits3.default)(Submitresponse, _Component);

  function Submitresponse() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Submitresponse);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Submitresponse.__proto__ || (0, _getPrototypeOf2.default)(Submitresponse)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      index: '',
      score: '',
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
                return campaign.methods.givemarks(_this.props.personal, myWallet, _this.state.score, _this.state.index).send({
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

  (0, _createClass3.default)(Submitresponse, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'Evaluate the response:'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.setState.question,
        onChange: function onChange(event) {
          return _this3.setState({ index: event.target.value });
        },
        label: 'index',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ score: event.target.value });
        },
        label: 'Marks',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Submit this question'));
    }
  }]);

  return Submitresponse;
}(_react.Component);

exports.default = Submitresponse;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2l2ZXJlc3BvbnNlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkNhbXBhaWduIiwiZmFjdG9yeSIsIndlYjMiLCJMaW5rIiwiUm91dGVyIiwiU3VibWl0cmVzcG9uc2UiLCJzdGF0ZSIsImluZGV4Iiwic2NvcmUiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJwZXJzb25hbCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwibXl3YWxsZXQiLCJjYWxsIiwiZnJvbSIsIm15V2FsbGV0IiwiZ2l2ZW1hcmtzIiwic2VuZCIsIm1lc3NhZ2UiLCJxdWVzdGlvbiIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFPLEFBQVM7O0FBQy9CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTyxBQUFjOzs7Ozs7O0ksQUFFeEI7Ozs7Ozs7Ozs7Ozs7Ozs0TixBQUNKO2FBQVEsQUFDRyxBQUNQO2FBRkksQUFFRyxBQUNQO29CQUhJLEFBR1UsQUFDZDtlLEFBSkksQUFJSTtBQUpKLEFBQ0osYSxBQU1KOzJGQUFXLGlCQUFBLEFBQU8sT0FBUDtnQ0FBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtzQkFBQSxBQUFNLEFBQ047c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FBL0IsQUFBYyxBQUErQixBQUN2QztBQUhHLDJCQUdRLG9CQUFTLE1BQUEsQUFBSyxNQUh0QixBQUdRLEFBQW9CLEFBQ3JDOzt3QkFBQSxBQUFRLElBQUksTUFBQSxBQUFLLE1BSlIsQUFJVCxBQUF1QjtnQ0FKZDtnQ0FBQTt1QkFNZ0IsY0FBQSxBQUFLLElBTnJCLEFBTWdCLEFBQVM7O21CQUExQjtBQU5DLG9DQUFBO2dDQUFBO3lDQVFnQixBQUFRLFFBQVIsQUFBZ0IsV0FBaEIsQUFBMkI7d0JBQ3hDLFNBVEgsQUFRZ0IsQUFBZ0MsQUFDN0MsQUFBUztBQURvQyxBQUNuRCxpQkFEbUI7O21CQUFqQjtBQVJDLG9DQVdQOzt3QkFBQSxBQUFRLElBWEQsQUFXUCxBQUFZO2dDQVhMO2dDQVlELEFBQVMsUUFBVCxBQUFpQixVQUFVLE1BQUEsQUFBSyxNQUFoQyxBQUFzQyxVQUF0QyxBQUErQyxVQUFTLE1BQUEsQUFBSyxNQUE3RCxBQUFtRSxPQUFNLE1BQUEsQUFBSyxNQUE5RSxBQUFvRixPQUFwRixBQUEyRjt3QkFDekYsU0FiRCxBQVlELEFBQWdHLEFBQzlGLEFBQVM7QUFEcUYsQUFDcEcsaUJBREk7O21CQVpDO2dDQUFBO0FBQUE7O21CQUFBO2dDQUFBO2dEQWlCUDs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQWpCdkIsQUFpQlAsQUFBYyxBQUFvQjs7bUJBRXBDO3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBbkJQLEFBbUJULEFBQWMsQUFBVzs7bUJBbkJoQjttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7Ozs7Ozs7OzZCQXNCRjttQkFDUDs7NkJBQ0UsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO29CQUFuRDtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSwyQ0FBQSxBQUFDO2VBQ1UsS0FBQSxBQUFLLFNBRGhCLEFBQ3lCLEFBQ3ZCO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxNQUFBLEFBQU0sT0FBdEMsQUFBUyxBQUFjLEFBQXNCO0FBRnpELEFBR0U7ZUFIRixBQUdVLEFBQ1I7dUJBSkYsQUFJa0I7O29CQUpsQjtzQkFGRixBQUVFLEFBTUE7QUFOQTtBQUNFLDBCQUtGLEFBQUM7ZUFDVSxLQUFBLEFBQUssTUFEaEIsQUFDc0IsQUFDcEI7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLE1BQUEsQUFBTSxPQUF0QyxBQUFTLEFBQWMsQUFBc0I7QUFGekQsQUFHRTtlQUhGLEFBR1EsQUFDTjt1QkFKRixBQUlnQjs7b0JBSmhCO3NCQVRKLEFBQ0UsQUFRRSxBQU9GO0FBUEU7QUFDRSwyQkFNSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7b0JBQWxEO3NCQWhCRixBQWdCRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixTQUFTLFNBQXJDO29CQUFBO3NCQUFBO0FBQUE7U0FsQkosQUFDRSxBQWlCRSxBQUdMOzs7OztBQXBEMEIsQSxBQXVEN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZ2l2ZXJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2pheWdwdC9EZXNrdG9wL1NraWxsY29kZSJ9