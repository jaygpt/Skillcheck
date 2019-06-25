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

var _jsxFileName = '/home/jaygpt/Desktop/Skillcode/components/answer.js';


var ContributeForm = function (_Component) {
  (0, _inherits3.default)(ContributeForm, _Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      wallet_address: '',
      question: '',
      value: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, accounts;
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
                return campaign.methods.answermytest(_this.state.wallet_address, _this.state.question, String(_this.state.value)).send({
                  from: accounts[0]
                });

              case 9:
                _routes.Router.pushRoute('/test/at/' + _this.props.address + '/attempt');
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 15:
                _this.setState({ loading: false });

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContributeForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'Question to answer:'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.setState.wallet_address,
        onChange: function onChange(event) {
          return _this3.setState({ wallet_address: event.target.value });
        },
        label: 'address',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.setState.question,
        onChange: function onChange(event) {
          return _this3.setState({ question: event.target.value });
        },
        label: 'uint',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        label: 'Answer',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Submit this question'));
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYW5zd2VyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkNhbXBhaWduIiwid2ViMyIsIkxpbmsiLCJSb3V0ZXIiLCJDb250cmlidXRlRm9ybSIsInN0YXRlIiwid2FsbGV0X2FkZHJlc3MiLCJxdWVzdGlvbiIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImFuc3dlcm15dGVzdCIsIlN0cmluZyIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTyxBQUFTOztBQUMvQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFjOzs7Ozs7O0ksQUFFdkI7Ozs7Ozs7Ozs7Ozs7Ozs0TkFDSixBO3NCQUFRLEFBQ1ksQUFDaEI7Z0JBRkksQUFFTSxBQUNWO2FBSEksQUFHRyxBQUNQO29CQUpJLEFBSVUsQUFDZDtlQUxJLEFBS0ksQTtBQUxKLEFBQ0osYUFPSixBOzJGQUFXLGlCQUFBLEFBQU8sT0FBUDtzQkFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtzQkFBQSxBQUFNLEFBQ047c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FBL0IsQUFBYyxBQUErQixBQUN2QztBQUhHLDJCQUdRLG9CQUFTLE1BQUEsQUFBSyxNQUh0QixBQUdRLEFBQW9CO2dDQUg1QjtnQ0FBQTt1QkFLZ0IsY0FBQSxBQUFLLElBTHJCLEFBS2dCLEFBQVM7O21CQUExQjtBQUxDLG9DQUFBO2dDQUFBO2dDQU9ELEFBQVMsUUFBVCxBQUFpQixhQUFhLE1BQUEsQUFBSyxNQUFuQyxBQUF5QyxnQkFBZSxNQUFBLEFBQUssTUFBN0QsQUFBbUUsVUFBUyxPQUFPLE1BQUEsQUFBSyxNQUF4RixBQUE0RSxBQUFrQixRQUE5RixBQUFzRzt3QkFDcEcsU0FSRCxBQU9ELEFBQTJHLEFBQ3pHLEFBQVM7QUFEZ0csQUFDL0csaUJBREk7O21CQUdOOytCQUFBLEFBQU8sd0JBQXNCLE1BQUEsQUFBSyxNQUFsQyxBQUF3QyxVQVZqQztnQ0FBQTtBQUFBOzttQkFBQTtnQ0FBQTtnREFZUDs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQVp2QixBQVlQLEFBQWMsQUFBb0I7O21CQUVwQztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQWRQLEFBY1QsQUFBYyxBQUFXOzttQkFkaEI7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7Ozs7Ozs2QkFpQkY7bUJBQ1A7OzZCQUNFLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esd0NBQUEsQUFBQztlQUNVLEtBQUEsQUFBSyxTQURoQixBQUN5QixBQUN2QjtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLGdCQUFnQixNQUFBLEFBQU0sT0FBL0MsQUFBUyxBQUFjLEFBQStCO0FBRmxFLEFBR0U7ZUFIRixBQUdVLEFBQ1I7dUJBSkYsQUFJa0I7O29CQUpsQjtzQkFGRixBQUVFLEFBTUE7QUFOQTtBQUNFLDBCQUtGLEFBQUM7ZUFDVSxLQUFBLEFBQUssU0FEaEIsQUFDeUIsQUFDdkI7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxVQUFVLE1BQUEsQUFBTSxPQUF6QyxBQUFTLEFBQWMsQUFBeUI7QUFGNUQsQUFHRTtlQUhGLEFBR1UsQUFDUjt1QkFKRixBQUlrQjs7b0JBSmxCO3NCQVJGLEFBUUUsQUFNQTtBQU5BO0FBQ0UsMEJBS0YsQUFBQztlQUNVLEtBQUEsQUFBSyxNQURoQixBQUNzQixBQUNwQjtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sTUFBQSxBQUFNLE9BQXRDLEFBQVMsQUFBYyxBQUFzQjtBQUZ6RCxBQUdFO2VBSEYsQUFHUSxBQUNOO3VCQUpGLEFBSWdCOztvQkFKaEI7c0JBZkosQUFDRSxBQWNFLEFBT0Y7QUFQRTtBQUNFLDJCQU1KLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDtvQkFBbEQ7c0JBdEJGLEFBc0JFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckM7b0JBQUE7c0JBQUE7QUFBQTtTQXhCSixBQUNFLEFBdUJFLEFBR0w7Ozs7O0FBdEQwQixBLEFBeUQ3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJhbnN3ZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvamF5Z3B0L0Rlc2t0b3AvU2tpbGxjb2RlIn0=