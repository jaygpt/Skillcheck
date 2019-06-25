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

var _jsxFileName = '/home/jaygpt/Desktop/Skillcode/components/testattempt.js';


var Attempt = function (_Component) {
  (0, _inherits3.default)(Attempt, _Component);

  function Attempt() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Attempt);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Attempt.__proto__ || (0, _getPrototypeOf2.default)(Attempt)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      wallet_address: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, accounts, mywallet, Students, examiner, flag, i;
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

                //change this loop to mapping
                mywallet = (0, _Test2.default)(_this.props.wallet_address);
                _context.next = 10;
                return campaign.methods.StudentsAddress().call();

              case 10:
                Students = _context.sent;
                examiner = campaign.methods.examineradd().call();
                flag = false;

                for (i = 0; i < Students.length; i++) {
                  if (Students[i] == _this.state.wallet_address) {
                    flag = true;
                  }
                }
                _context.next = 16;
                return mywallet.methods.Setadmin(examiner).send({
                  from: accounts[0]
                });

              case 16:
                console.log(flag);
                if (flag) {
                  _routes.Router.pushRoute('/test/at/' + _this.props.address + '/attempt');
                  console.log('Yes');
                } else {
                  _routes.Router.pushRoute('/test/test');
                  console.log('NO');
                }
                _context.next = 23;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context['catch'](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 23:
                _this.setState({ loading: false });

              case 24:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 20]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  // incomplete


  (0, _createClass3.default)(Attempt, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Attempt:'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.setState.wallet_address,
        onChange: function onChange(event) {
          return _this3.setState({ wallet_address: event.target.value });
        },
        label: 'address',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Attempt!'));
    }
  }]);

  return Attempt;
}(_react.Component);

exports.default = Attempt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGVzdGF0dGVtcHQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIldhbGxldCIsIkF0dGVtcHQiLCJzdGF0ZSIsIndhbGxldF9hZGRyZXNzIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibXl3YWxsZXQiLCJtZXRob2RzIiwiU3R1ZGVudHNBZGRyZXNzIiwiY2FsbCIsIlN0dWRlbnRzIiwiZXhhbWluZXIiLCJleGFtaW5lcmFkZCIsImZsYWciLCJpIiwibGVuZ3RoIiwiU2V0YWRtaW4iLCJzZW5kIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU8sQUFBUzs7QUFDL0IsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQU0sQUFBYyxBQUM3QixBQUFPLEFBQVk7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7Ozs7Ozs7OE0sQUFDSjtzQkFBUSxBQUNZLEFBQ2hCO29CQUZJLEFBRVUsQUFDZDtlLEFBSEksQUFHSztBQUhMLEFBQ0osYUFLSixBOzJGQUFXLGlCQUFBLEFBQU8sT0FBUDtvRUFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtzQkFBQSxBQUFNLEFBQ047c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FBL0IsQUFBYyxBQUErQixBQUN2QztBQUhHLDJCQUdRLG9CQUFTLE1BQUEsQUFBSyxNQUh0QixBQUdRLEFBQW9CO2dDQUg1QjtnQ0FBQTt1QkFLZ0IsY0FBQSxBQUFLLElBTHJCLEFBS2dCLEFBQVM7O21CQUExQjtBQUxDLG9DQU1QOztBQUNNO0FBUEMsMkJBT1Usb0JBQU8sTUFBQSxBQUFLLE1BUHRCLEFBT1UsQUFBa0I7Z0NBUDVCO3VCQVFnQixTQUFBLEFBQVMsUUFBVCxBQUFpQixrQkFSakMsQUFRZ0IsQUFBbUM7O21CQUFwRDtBQVJDLG9DQVNEO0FBVEMsMkJBU1UsU0FBQSxBQUFTLFFBQVQsQUFBaUIsY0FUM0IsQUFTVSxBQUErQixBQUU1QztBQVhHLHVCQUFBLEFBV0ksQUFDWDs7cUJBQUEsQUFBUSxJQUFSLEFBQVksR0FBRSxJQUFFLFNBQWhCLEFBQXlCLFFBQXpCLEFBQWdDLEtBQUksQUFDaEM7c0JBQUcsU0FBQSxBQUFTLE1BQU0sTUFBQSxBQUFLLE1BQXZCLEFBQTZCLGdCQUFlLEFBQ3hDOzJCQUFBLEFBQU8sQUFDVjtBQUNKO0FBaEJNO2dDQUFBO2dDQWlCRCxBQUFTLFFBQVQsQUFBaUIsU0FBakIsQUFBMEIsVUFBMUIsQUFBb0M7d0JBQ2xDLFNBbEJELEFBaUJELEFBQXlDLEFBQ3ZDLEFBQVM7QUFEOEIsQUFDN0MsaUJBREk7O21CQUdOO3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7b0JBQUEsQUFBRyxNQUFLLEFBQ1I7aUNBQUEsQUFBTyx3QkFBc0IsTUFBQSxBQUFLLE1BQWxDLEFBQXdDLFVBQ3hDOzBCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1g7QUFIRCx1QkFHSyxBQUNIO2lDQUFBLEFBQU8sVUFBUCxBQUFpQixBQUNqQjswQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNiO0FBM0JNO2dDQUFBO0FBQUE7O21CQUFBO2dDQUFBO2dEQTZCUDs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQTdCdkIsQUE2QlAsQUFBYyxBQUFvQjs7bUJBRXBDO3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBL0JQLEFBK0JULEFBQWMsQUFBVzs7bUJBL0JoQjttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7Ozs7QUFEYjs7Ozs7OzZCQW1DVzttQkFDUDs7NkJBQ0UsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCO29CQUFyQjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSw2QkFBQSxBQUFDO2VBQ1UsS0FBQSxBQUFLLFNBRGhCLEFBQ3lCLEFBQ3ZCO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsZ0JBQWdCLE1BQUEsQUFBTSxPQUEvQyxBQUFTLEFBQWMsQUFBK0I7QUFGbEUsQUFHRTtlQUhGLEFBR1UsQUFDUjt1QkFKRixBQUlrQjs7b0JBSmxCO3NCQUhKLEFBQ0UsQUFFRSxBQU9GO0FBUEU7QUFDRSwyQkFNSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7b0JBQWxEO3NCQVZGLEFBVUUsQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQztvQkFBQTtzQkFBQTtBQUFBO1NBWkosQUFDRSxBQVdFLEFBR0w7Ozs7O0FBekRtQixBLEFBNER0Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJ0ZXN0YXR0ZW1wdC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9qYXlncHQvRGVza3RvcC9Ta2lsbGNvZGUifQ==