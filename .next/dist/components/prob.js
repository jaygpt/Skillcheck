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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jaygpt/Desktop/Skillcode/components/prob.js';


var Prob = function (_Component) {
  (0, _inherits3.default)(Prob, _Component);

  function Prob() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Prob);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Prob.__proto__ || (0, _getPrototypeOf2.default)(Prob)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      index: '',
      score: '',
      wallet_of_student: '',
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
                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return campaign.methods.examineradd().call();

              case 9:
                myWallet = _context.sent;

                console.log(myWallet);
                _context.next = 13;
                return campaign.methods.addProbe(_this.state.wallet_of_student, _this.state.index, _this.state.score).send({
                  from: accounts[0]
                });

              case 13:
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context['catch'](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 18:
                _this.setState({ loading: false });

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 15]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Prob, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'Evaluate the response:'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.setState.wallet_of_student,
        onChange: function onChange(event) {
          return _this3.setState({ wallet_of_student: event.target.value });
        },
        label: 'address',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.setState.question,
        onChange: function onChange(event) {
          return _this3.setState({ index: event.target.value });
        },
        label: 'index',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
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
          lineNumber: 52
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Add Prob'));
    }
  }]);

  return Prob;
}(_react.Component);

exports.default = Prob;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvYi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJCdXR0b24iLCJDYW1wYWlnbiIsIndlYjMiLCJMaW5rIiwiUm91dGVyIiwiUHJvYiIsInN0YXRlIiwiaW5kZXgiLCJzY29yZSIsIndhbGxldF9vZl9zdHVkZW50IiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImV4YW1pbmVyYWRkIiwiY2FsbCIsIm15V2FsbGV0IiwiY29uc29sZSIsImxvZyIsImFkZFByb2JlIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiLCJxdWVzdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTyxBQUFTOztBQUMvQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTyxBQUFjOzs7Ozs7O0ksQUFFeEI7Ozs7Ozs7Ozs7Ozs7Ozt3TUFDSixBO2FBQVEsQUFDRyxBQUNQO2FBRkksQUFFRyxBQUNQO3lCQUhJLEFBR2MsQUFDbEI7b0JBSkksQUFJVSxBQUNkO2UsQUFMSSxBQUtJO0FBTEosQUFDSixhLEFBT0o7MkZBQVcsaUJBQUEsQUFBTyxPQUFQO2dDQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3NCQUFBLEFBQU0sQUFDTjtzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUEvQixBQUFjLEFBQStCLEFBQ3ZDO0FBSEcsMkJBR1Esb0JBQVMsTUFBQSxBQUFLLE1BSHRCLEFBR1EsQUFBb0I7Z0NBSDVCO2dDQUFBO3VCQUtnQixjQUFBLEFBQUssSUFMckIsQUFLZ0IsQUFBUzs7bUJBQTFCO0FBTEMsb0NBQUE7Z0NBQUE7dUJBT2dCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGNBUGpDLEFBT2dCLEFBQStCOzttQkFBaEQ7QUFQQyxvQ0FRUDs7d0JBQUEsQUFBUSxJQVJELEFBUVAsQUFBWTtnQ0FSTDtnQ0FTRCxBQUFTLFFBQVQsQUFBaUIsU0FBUyxNQUFBLEFBQUssTUFBL0IsQUFBcUMsbUJBQWtCLE1BQUEsQUFBSyxNQUE1RCxBQUFrRSxPQUFNLE1BQUEsQUFBSyxNQUE3RSxBQUFtRixPQUFuRixBQUEwRjt3QkFDeEYsU0FWRCxBQVNELEFBQStGLEFBQzdGLEFBQVM7QUFEb0YsQUFDbkcsaUJBREk7O21CQVRDO2dDQUFBO0FBQUE7O21CQUFBO2dDQUFBO2dEQWNQOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBZHZCLEFBY1AsQUFBYyxBQUFvQjs7bUJBRXBDO3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBaEJQLEFBZ0JULEFBQWMsQUFBVzs7bUJBaEJoQjttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7Ozs7Ozs7OzZCQW1CRjttQkFDUDs7NkJBQ0UsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO29CQUFuRDtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSwyQ0FBQSxBQUFDO2VBQ1UsS0FBQSxBQUFLLFNBRGhCLEFBQ3lCLEFBQ3ZCO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsbUJBQW1CLE1BQUEsQUFBTSxPQUFsRCxBQUFTLEFBQWMsQUFBa0M7QUFGckUsQUFHRTtlQUhGLEFBR1UsQUFDUjt1QkFKRixBQUlrQjs7b0JBSmxCO3NCQUZGLEFBRUUsQUFNQTtBQU5BO0FBQ0UsMEJBS0YsQUFBQztlQUNVLEtBQUEsQUFBSyxTQURoQixBQUN5QixBQUN2QjtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sTUFBQSxBQUFNLE9BQXRDLEFBQVMsQUFBYyxBQUFzQjtBQUZ6RCxBQUdFO2VBSEYsQUFHVSxBQUNSO3VCQUpGLEFBSWtCOztvQkFKbEI7c0JBUkYsQUFRRSxBQU1BO0FBTkE7QUFDRSwwQkFLRixBQUFDO2VBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ3BCO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxNQUFBLEFBQU0sT0FBdEMsQUFBUyxBQUFjLEFBQXNCO0FBRnpELEFBR0U7ZUFIRixBQUdRLEFBQ047dUJBSkYsQUFJZ0I7O29CQUpoQjtzQkFmSixBQUNFLEFBY0UsQUFPRjtBQVBFO0FBQ0UsMkJBTUosQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEO29CQUFsRDtzQkF0QkYsQUFzQkUsQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQztvQkFBQTtzQkFBQTtBQUFBO1NBeEJKLEFBQ0UsQUF1QkUsQUFHTDs7Ozs7QUF4RGdCLEEsQUEyRG5COztrQkFBQSxBQUFlIiwiZmlsZSI6InByb2IuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvamF5Z3B0L0Rlc2t0b3AvU2tpbGxjb2RlIn0=