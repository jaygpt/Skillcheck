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
                // await mywallet.methods.Setadmin(examiner).send({
                //   from: accounts[0]
                // });
                console.log(flag);
                if (flag) {
                  _routes.Router.pushRoute('/test/at/' + _this.props.address + '/attempt');
                  console.log('Yes');
                } else {
                  _routes.Router.pushRoute('/test/test');
                  console.log('NO');
                }
                _context.next = 21;
                break;

              case 18:
                _context.prev = 18;
                _context.t0 = _context['catch'](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 21:
                _this.setState({ loading: false });

              case 22:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 18]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGVzdGF0dGVtcHQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIldhbGxldCIsIkF0dGVtcHQiLCJzdGF0ZSIsIndhbGxldF9hZGRyZXNzIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibXl3YWxsZXQiLCJtZXRob2RzIiwiU3R1ZGVudHNBZGRyZXNzIiwiY2FsbCIsIlN0dWRlbnRzIiwiZXhhbWluZXIiLCJleGFtaW5lcmFkZCIsImZsYWciLCJpIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTyxBQUFTOztBQUMvQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFjLEFBQzdCLEFBQU8sQUFBWTs7Ozs7OztJLEFBRWI7Ozs7Ozs7Ozs7Ozs7Ozs4TSxBQUNKO3NCQUFRLEFBQ1ksQUFDaEI7b0JBRkksQUFFVSxBQUNkO2VBSEksQUFHSyxBO0FBSEwsQUFDSixhLEFBS0o7MkZBQVcsaUJBQUEsQUFBTyxPQUFQO29FQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3NCQUFBLEFBQU0sQUFDTjtzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUEvQixBQUFjLEFBQStCLEFBQ3ZDO0FBSEcsMkJBR1Esb0JBQVMsTUFBQSxBQUFLLE1BSHRCLEFBR1EsQUFBb0I7Z0NBSDVCO2dDQUFBO3VCQUtnQixjQUFBLEFBQUssSUFMckIsQUFLZ0IsQUFBUzs7bUJBQTFCO0FBTEMsb0NBTVA7O0FBQ007QUFQQywyQkFPVSxvQkFBTyxNQUFBLEFBQUssTUFQdEIsQUFPVSxBQUFrQjtnQ0FQNUI7dUJBUWdCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGtCQVJqQyxBQVFnQixBQUFtQzs7bUJBQXBEO0FBUkMsb0NBU0Q7QUFUQywyQkFTVSxTQUFBLEFBQVMsUUFBVCxBQUFpQixjQVQzQixBQVNVLEFBQStCLEFBRTVDO0FBWEcsdUJBQUEsQUFXSSxBQUNYOztxQkFBQSxBQUFRLElBQVIsQUFBWSxHQUFFLElBQUUsU0FBaEIsQUFBeUIsUUFBekIsQUFBZ0MsS0FBSSxBQUNoQztzQkFBRyxTQUFBLEFBQVMsTUFBTSxNQUFBLEFBQUssTUFBdkIsQUFBNkIsZ0JBQWUsQUFDeEM7MkJBQUEsQUFBTyxBQUNWO0FBQ0o7QUFDRDtBQUNBO0FBQ0E7QUFDQTt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO29CQUFBLEFBQUcsTUFBSyxBQUNSO2lDQUFBLEFBQU8sd0JBQXNCLE1BQUEsQUFBSyxNQUFsQyxBQUF3QyxVQUN4QzswQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNYO0FBSEQsdUJBR0ssQUFDSDtpQ0FBQSxBQUFPLFVBQVAsQUFBaUIsQUFDakI7MEJBQUEsQUFBUSxJQUFSLEFBQVksQUFDYjtBQTNCTTtnQ0FBQTtBQUFBOzttQkFBQTtnQ0FBQTtnREE2QlA7O3NCQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUE3QnZCLEFBNkJQLEFBQWMsQUFBb0I7O21CQUVwQztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQS9CUCxBQStCVCxBQUFjLEFBQVc7O21CQS9CaEI7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7O0FBRGI7Ozs7Ozs2QkFtQ1c7bUJBQ1A7OzZCQUNFLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQjtvQkFBckI7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsNkJBQUEsQUFBQztlQUNVLEtBQUEsQUFBSyxTQURoQixBQUN5QixBQUN2QjtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLGdCQUFnQixNQUFBLEFBQU0sT0FBL0MsQUFBUyxBQUFjLEFBQStCO0FBRmxFLEFBR0U7ZUFIRixBQUdVLEFBQ1I7dUJBSkYsQUFJa0I7O29CQUpsQjtzQkFISixBQUNFLEFBRUUsQUFPRjtBQVBFO0FBQ0UsMkJBTUosQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEO29CQUFsRDtzQkFWRixBQVVFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckM7b0JBQUE7c0JBQUE7QUFBQTtTQVpKLEFBQ0UsQUFXRSxBQUdMOzs7OztBQXpEbUIsQSxBQTREdEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoidGVzdGF0dGVtcHQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvamF5Z3B0L0Rlc2t0b3AvU2tpbGxjb2RlIn0=