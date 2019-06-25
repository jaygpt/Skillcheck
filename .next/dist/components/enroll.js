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

var _jsxFileName = '/home/jaygpt/Desktop/Skillcode/components/enroll.js';


var EnrollForm = function (_Component) {
  (0, _inherits3.default)(EnrollForm, _Component);

  function EnrollForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EnrollForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnrollForm.__proto__ || (0, _getPrototypeOf2.default)(EnrollForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      wallet_address: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, accounts, mywallet, examiner;
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

                //sending answer to be complete
                mywallet = (0, _Test2.default)(_this.props.wallet_address);
                examiner = campaign.methods.examineradd().call();
                _context.next = 11;
                return campaign.methods.enrollintest(_this.state.wallet_address).send({
                  from: accounts[0]
                });

              case 11:
                _context.next = 13;
                return campaign.methods.starteval(_this.state.wallet_address).send({
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
  // incomplete


  (0, _createClass3.default)(EnrollForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'Enroll Yourself for Test:'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.setState.wallet_address,
        onChange: function onChange(event) {
          return _this3.setState({ wallet_address: event.target.value });
        },
        label: 'address',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Enroll!'));
    }
  }]);

  return EnrollForm;
}(_react.Component);

exports.default = EnrollForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZW5yb2xsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkNhbXBhaWduIiwiV2FsbGV0Iiwid2ViMyIsIkxpbmsiLCJSb3V0ZXIiLCJFbnJvbGxGb3JtIiwic3RhdGUiLCJ3YWxsZXRfYWRkcmVzcyIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm15d2FsbGV0IiwiZXhhbWluZXIiLCJtZXRob2RzIiwiZXhhbWluZXJhZGQiLCJjYWxsIiwiZW5yb2xsaW50ZXN0Iiwic2VuZCIsImZyb20iLCJzdGFydGV2YWwiLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU8sQUFBUzs7QUFDL0IsQUFBTyxBQUFjLEFBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFNLEFBQWM7Ozs7Ozs7SUFFdkIsQTs7Ozs7Ozs7Ozs7Ozs7O29OQUNKLEE7c0JBQVEsQUFDWSxBQUNoQjtvQkFGSSxBQUVVLEFBQ2Q7ZUFISSxBLEFBR0s7QUFITCxBQUNKLGEsQUFLSjsyRkFBVyxpQkFBQSxBQUFPLE9BQVA7MENBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBQUEsQUFBTSxBQUNOO3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBQS9CLEFBQWMsQUFBK0IsQUFDdkM7QUFIRywyQkFHUSxvQkFBUyxNQUFBLEFBQUssTUFIdEIsQUFHUSxBQUFvQjtnQ0FINUI7Z0NBQUE7dUJBS2dCLGNBQUEsQUFBSyxJQUxyQixBQUtnQixBQUFTOzttQkFBMUI7QUFMQyxvQ0FNUDs7QUFDTTtBQVBDLDJCQU9VLG9CQUFPLE1BQUEsQUFBSyxNQVB0QixBQU9VLEFBQWtCLEFBQzdCO0FBUkMsMkJBUVUsU0FBQSxBQUFTLFFBQVQsQUFBaUIsY0FSM0IsQUFRVSxBQUErQjtnQ0FSekM7Z0NBVUQsQUFBUyxRQUFULEFBQWlCLGFBQWEsTUFBQSxBQUFLLE1BQW5DLEFBQXlDLGdCQUF6QyxBQUF5RDt3QkFDdkQsU0FYRCxBQVVELEFBQThELEFBQzVELEFBQVM7QUFEbUQsQUFDbEUsaUJBREk7O21CQVZDO2dDQUFBO2dDQWNELEFBQVMsUUFBVCxBQUFpQixVQUFVLE1BQUEsQUFBSyxNQUFoQyxBQUFzQyxnQkFBdEMsQUFBc0Q7d0JBQ3BELFNBZkQsQUFjRCxBQUEyRCxBQUN6RCxBQUFTO0FBRGdELEFBQy9ELGlCQURJOzttQkFkQztnQ0FBQTtBQUFBOzttQkFBQTtnQ0FBQTtnREFxQlA7O3NCQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFyQnZCLEFBcUJQLEFBQWMsQUFBb0I7O21CQUVwQztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQXZCUCxBQXVCVCxBQUFjLEFBQVc7O21CQXZCaEI7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7O0FBRGI7Ozs7Ozs2QkEyQlc7bUJBQ1A7OzZCQUNFLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQjtvQkFBckI7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsOENBQUEsQUFBQztlQUNVLEtBQUEsQUFBSyxTQURoQixBQUN5QixBQUN2QjtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLGdCQUFnQixNQUFBLEFBQU0sT0FBL0MsQUFBUyxBQUFjLEFBQStCO0FBRmxFLEFBR0U7ZUFIRixBQUdVLEFBQ1I7dUJBSkYsQUFJa0I7O29CQUpsQjtzQkFISixBQUNFLEFBRUUsQUFPRjtBQVBFO0FBQ0UsMkJBTUosQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEO29CQUFsRDtzQkFWRixBQVVFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckM7b0JBQUE7c0JBQUE7QUFBQTtTQVpKLEFBQ0UsQUFXRSxBQUdMOzs7OztBQWpEc0IsQSxBQW9EekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZW5yb2xsLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2pheWdwdC9EZXNrdG9wL1NraWxsY29kZSJ9