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

var _Test = require('../../ethereum/Test');

var _Test2 = _interopRequireDefault(_Test);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jaygpt/Desktop/Skillcode/pages/test/edit.js?entry';


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      question: '',
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
                _context.prev = 2;
                campaign = (0, _Test2.default)(_this.props.address);
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;

                console.log(accounts);
                _context.next = 10;
                return campaign.methods.addQuestion(String(_this.state.question)).send({
                  from: accounts[0]
                });

              case 10:
                _routes.Router.pushRoute('/test/at/' + _this.props.address);
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](2);

                _this.setState({ errorMessage: _context.t0.message });

              case 16:
                _this.setState({ loading: false });

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 13]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Add new question if you are examiner'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, 'Add Question'), _react2.default.createElement(_semanticUiReact.Input, {
        label: 'string',
        labelPosition: 'right',
        value: this.state.question,
        onChange: function onChange(event) {
          return _this3.setState({ question: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, 'Create!')));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var address, campaign, Studadd, count, quest, Responses, i, j, addres, mytest, detail, myres;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address;
                campaign = (0, _Test2.default)(props.query.address);
                _context2.next = 4;
                return campaign.methods.StudentsAddress().call();

              case 4:
                Studadd = _context2.sent;
                count = Studadd.length;
                _context2.next = 8;
                return campaign.methods.numberofQ().call();

              case 8:
                quest = _context2.sent;

                //sendresponse
                Responses = [];
                i = 0;

              case 11:
                if (!(i < count)) {
                  _context2.next = 28;
                  break;
                }

                addres = Studadd[i];
                mytest = [];
                j = 0;

              case 15:
                if (!(j < quest)) {
                  _context2.next = 24;
                  break;
                }

                _context2.next = 18;
                return campaign.methods.sendresponse(addres, j).call();

              case 18:
                detail = _context2.sent;
                myres = {
                  hisaddress: addres,
                  question: detail[0],
                  answer: detail[1]
                };

                mytest.push(myres);

              case 21:
                j++;
                _context2.next = 15;
                break;

              case 24:
                Responses.push(mytest);

              case 25:
                i++;
                _context2.next = 11;
                break;

              case 28:
                console.log(Responses);
                console.log(Studadd);
                // return properly
                return _context2.abrupt('return', { address: address, Responses: Responses });

              case 31:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()

    // add dot render function for render respnses and add Prob paper

  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Rlc3QvZWRpdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhbXBhaWduIiwiTGF5b3V0IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIndlYjMiLCJSb3V0ZXIiLCJDYW1wYWlnblNob3ciLCJzdGF0ZSIsInF1ZXN0aW9uIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJhZGRRdWVzdGlvbiIsIlN0cmluZyIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIiwicXVlcnkiLCJTdHVkZW50c0FkZHJlc3MiLCJjYWxsIiwiU3R1ZGFkZCIsImNvdW50IiwibGVuZ3RoIiwibnVtYmVyb2ZRIiwicXVlc3QiLCJSZXNwb25zZXMiLCJpIiwiYWRkcmVzIiwibXl0ZXN0IiwiaiIsInNlbmRyZXNwb25zZSIsImRldGFpbCIsIm15cmVzIiwiaGlzYWRkcmVzcyIsImFuc3dlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBUSxBQUFPOztBQUM5QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7Ozs7Ozt3TixBQUNGO2dCQUFRLEFBQ08sQUFDWDtvQkFGSSxBQUVVLEFBQ2Q7ZUFISSxBQUdLLEE7QUFITCxBQUNKLGEsQUFtQ0o7MkZBQVcsaUJBQUEsQUFBTSxPQUFOO3NCQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNQO3NCQUFBLEFBQU0sQUFDTjtzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUZ4QixBQUVQLEFBQWMsQUFBK0I7Z0NBRW5DO0FBSkgsMkJBSWMsb0JBQVMsTUFBQSxBQUFLLE1BSjVCLEFBSWMsQUFBb0I7Z0NBSmxDO3VCQUtvQixjQUFBLEFBQUssSUFMekIsQUFLb0IsQUFBUzs7bUJBQTFCO0FBTEgsb0NBTUg7O3dCQUFBLEFBQVEsSUFOTCxBQU1ILEFBQVk7Z0NBTlQ7Z0NBT0csQUFBUyxRQUFULEFBQWlCLFlBQVksT0FBTyxNQUFBLEFBQUssTUFBekMsQUFBNkIsQUFBa0IsV0FBL0MsQUFBMEQ7d0JBQzFELFNBUkgsQUFPRyxBQUErRCxBQUMvRCxBQUFTO0FBRHNELEFBQ3JFLGlCQURNOzttQkFHUjsrQkFBQSxBQUFPLHdCQUFzQixNQUFBLEFBQUssTUFWN0IsQUFVTCxBQUF3QztnQ0FWbkM7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBWUw7O3NCQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFaekIsQUFZTCxBQUFjLEFBQW9COzttQkFFcEM7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FkVCxBQWNQLEFBQWMsQUFBVzs7bUJBZGxCO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7Ozs7Ozs7NkJBaUJKO21CQUNQOzs2QkFDSSxBQUFDOztvQkFBRDtzQkFBQSxBQUNJO0FBREo7QUFBQSxPQUFBLGtCQUNJLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURKLEFBQ0ksQUFFQSx5REFBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxpQ0FBQSxBQUFDO2VBQUQsQUFDWSxBQUNSO3VCQUZKLEFBRW9CLEFBQ2hCO2VBQVMsS0FBQSxBQUFLLE1BSGxCLEFBR3dCLEFBQ3BCO2tCQUFhLHlCQUFBO2lCQUNULE9BQUEsQUFBSyxTQUFTLEVBQUUsVUFBVyxNQUFBLEFBQU0sT0FEeEIsQUFDVCxBQUFjLEFBQTBCO0FBTGhEOztvQkFBQTtzQkFISixBQUNFLEFBRUUsQUFRRjtBQVJFO0FBQ0ksMkJBT04sQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEO29CQUFsRDtzQkFYRixBQVdFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckM7b0JBQUE7c0JBQUE7QUFBQTtTQWhCVixBQUNJLEFBR0ksQUFZRSxBQUlYOzs7Ozs2RyxBQXBFOEI7Ozs7O21CQUNqQjtBLDBCQUFZLE0sQUFBTSxNLEFBQWxCLEFBQ0Y7QSwyQkFBVyxvQkFBUyxNQUFBLEFBQU0sTUFBZixBQUFxQixBOzt1QkFDaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsa0JBQWpCLEFBQW1DLEE7O21CQUFuRDtBLG9DQUNBO0Esd0JBQVEsUUFBUSxBOzt1QkFDRixTQUFBLEFBQVMsUUFBVCxBQUFpQixZQUFqQixBLEFBQTZCOzttQkFBM0M7QSxrQ0FDTjs7QUFDTTtBLDRCQUVGLEEsQUFGYztvQkFFWixBOzs7c0JBQUUsSUFBRSxBOzs7QUFDRjs7QSx5QkFBUyxRQUFBLEEsQUFBUSxBQUNqQjtBLHlCLEFBQVMsQUFDWDtvQixBQUFJOzs7c0JBQUUsSUFBRSxBOzs7Ozs7dUJBQ1csU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEIsUUFBOUIsQUFBcUMsR0FBckMsQUFBd0MsQTs7bUJBQXZEO0EsbUNBQ0E7QTs4QkFBUSxBQUNBLEFBQ1o7NEJBQVUsT0FGRSxBQUVGLEFBQU8sQUFDakI7MEJBQVEsTyxBQUhJLEFBR0osQUFBTyxBQUVqQjtBQUxjLEFBQ1o7O3VCQUlGLEFBQU8sS0FBUCxBQUFZOzttQkFQSTtBOzs7O21CQVNsQjswQkFBQSxBQUFVLEtBQVYsQUFBZTs7bUJBWkQ7QTs7OzttQkFjaEI7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaOztrREFDTyxFQUFFLFNBQUYsU0FBVSxXQUFWLEE7Ozs7Ozs7Ozs7Ozs7OztBQUdYOzs7Ozs7O0FBcEN1QixBLEFBOEUzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJlZGl0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2pheWdwdC9EZXNrdG9wL1NraWxsY29kZSJ9