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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jaygpt/Desktop/Skillcode/pages/campaign/new.js?entry';

var CampaignNew = function (_Component) {
  (0, _inherits3.default)(CampaignNew, _Component);

  function CampaignNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _context.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context.sent;

                console.log(accounts);
                accounts.push(0xdE4996d020808f261c13eab13Ff04FF744aE7d57);
                _context.next = 8;
                return _factory2.default.methods.createwallet().send({
                  from: accounts[0]
                });

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, 'Create new wallet and Register yourself'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, 'Your Account Address'), _react2.default.createElement(_semanticUiReact.Input, {
        label: 'string',
        labelPosition: 'right',
        value: this.state.name,
        onChange: function onChange(event) {
          return _this3.setState({ name: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      })), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'Create!')));
    }
  }]);

  return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWduL25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsImZhY3RvcnkiLCJ3ZWIzIiwiQ2FtcGFpZ25OZXciLCJzdGF0ZSIsIm5hbWUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJtZXRob2RzIiwiY3JlYXRld2FsbGV0Iiwic2VuZCIsImZyb20iLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBUTs7QUFDdkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7Ozs7Ozs7SUFFWCxBOzs7Ozs7Ozs7Ozs7Ozs7c04sQUFDRjtZQUFRLEFBQ0csQTtBQURILEFBQ0osYSxBQUdKOzJGQUFXLGlCQUFBLEFBQU0sT0FBTjtZQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNQO3NCQURPLEFBQ1AsQUFBTTtnQ0FEQzt1QkFFZ0IsY0FBQSxBQUFLLElBRnJCLEFBRWdCLEFBQVM7O21CQUExQjtBQUZDLG9DQUdQOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO3lCQUFBLEFBQVMsS0FKRixBQUlQLEFBQWM7Z0NBSlA7eUNBS0QsQUFBUSxRQUFSLEFBQWdCLGVBQWhCLEFBQStCO3dCQUM3QixTQU5ELEFBS0QsQUFBb0MsQUFDbEMsQUFBUztBQUR5QixBQUN4QyxpQkFESTs7bUJBTEM7bUJBQUE7Z0NBQUE7O0FBQUE7b0JBQUE7QTs7Ozs7Ozs7Ozs2QkFVRjttQkFDVDs7NkJBQ0EsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDSTtBQURKO0FBQUEsT0FBQSxrQkFDSSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FESixBQUNJLEFBRUEsNERBQUEsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCO29CQUFyQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EseUNBQUEsQUFBQztlQUFELEFBQ1ksQUFDUjt1QkFGSixBQUVvQixBQUNoQjtlQUFTLEtBQUEsQUFBSyxNQUhsQixBQUd3QixBQUNwQjtrQkFBYSx5QkFBQTtpQkFDVCxPQUFBLEFBQUssU0FBUyxFQUFFLE1BQU8sTUFBQSxBQUFNLE9BRHBCLEFBQ1QsQUFBYyxBQUFzQjtBQUw1Qzs7b0JBQUE7c0JBSEosQUFDRSxBQUVFLEFBU0Y7QUFURTtBQUNJLDJCQVFOLEFBQUMseUNBQU8sU0FBUjtvQkFBQTtzQkFBQTtBQUFBO1NBaEJOLEFBQ0EsQUFHSSxBQVlFLEFBSVA7Ozs7O0FBcEN1QixBLEFBdUMxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvamF5Z3B0L0Rlc2t0b3AvU2tpbGxjb2RlIn0=