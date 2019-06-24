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

var _prob = require('../../components/prob');

var _prob2 = _interopRequireDefault(_prob);

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
      errormessage: '',
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
    }(), _this.onsubmit = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var campaign, accounts, examiner;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                _this.setState({ errormessage: '' });
                _context2.prev = 2;
                campaign = (0, _Test2.default)(_this.props.address);
                _context2.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context2.sent;
                examiner = campaign.methods.examineradd().call();

                if (examiner == accounts[0]) {
                  _routes.Router.pushRoute('/test/at/' + _this.props.address + '/finalize');
                } else {
                  _this.setState({ errormessage: 'You are not examiner' });
                }
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2['catch'](2);

                _this.setState({ errormessage: _context2.t0.message });

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[2, 11]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'renderCampaigns',
    value: function renderCampaigns() {
      var items = [];
      var l = 0;
      for (l = 0; l < this.props.Responses.length; l++) {
        var k;
        for (k = 0; k < this.props.Responses[l].length; k++) {
          var thisitem = {
            header: this.props.Responses[l][k].question,
            meta: this.props.Responses[l][k].hisaddress,
            description: _react2.default.createElement('p', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              }
            }, this.props.Responses[l][k].answer),
            fluid: true
          };
          items.push(thisitem);
        }
      }
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      });
    }
    // add dot render function for render respnses and add Prob paper

    /// error : edit.js is not working properly  

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, 'Add new question if you are examiner'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, this.renderCampaigns(), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onsubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errormessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, 'Finalize Marks'))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, 'Add Questions'), _react2.default.createElement(_semanticUiReact.Input, {
        label: 'string',
        labelPosition: 'right',
        value: this.state.question,
        onChange: function onChange(event) {
          return _this3.setState({ question: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, 'Add!')), _react2.default.createElement(_prob2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
        var address, campaign, Studadd, count, quest, Responses, i, j, addres, mytest, detail, myres;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                address = props.query.address;
                campaign = (0, _Test2.default)(props.query.address);
                _context3.next = 4;
                return campaign.methods.StudentsAddress().call();

              case 4:
                Studadd = _context3.sent;
                count = Studadd.length;
                _context3.next = 8;
                return campaign.methods.numberofQ().call();

              case 8:
                quest = _context3.sent;

                //sendresponse
                Responses = [];
                i = 0;

              case 11:
                if (!(i < count)) {
                  _context3.next = 28;
                  break;
                }

                addres = Studadd[i];
                mytest = [];
                j = 0;

              case 15:
                if (!(j < quest)) {
                  _context3.next = 24;
                  break;
                }

                _context3.next = 18;
                return campaign.methods.sendresponse(addres, j).call();

              case 18:
                detail = _context3.sent;
                myres = {
                  hisaddress: addres,
                  question: detail[0],
                  answer: detail[1]
                };

                mytest.push(myres);

              case 21:
                j++;
                _context3.next = 15;
                break;

              case 24:
                Responses.push(mytest);

              case 25:
                i++;
                _context3.next = 11;
                break;

              case 28:
                console.log(Responses[0]);
                // return properly
                return _context3.abrupt('return', {
                  address: address,
                  Responses: Responses
                });

              case 30:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getInitialProps(_x3) {
        return _ref4.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Rlc3QvZWRpdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhbXBhaWduIiwiTGF5b3V0IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIkNhcmQiLCJHcmlkIiwid2ViMyIsIlJvdXRlciIsIlByb2IiLCJDYW1wYWlnblNob3ciLCJzdGF0ZSIsInF1ZXN0aW9uIiwiZXJyb3JNZXNzYWdlIiwiZXJyb3JtZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJhZGRRdWVzdGlvbiIsIlN0cmluZyIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsIm9uc3VibWl0IiwiZXhhbWluZXIiLCJleGFtaW5lcmFkZCIsImNhbGwiLCJpdGVtcyIsImwiLCJSZXNwb25zZXMiLCJsZW5ndGgiLCJrIiwidGhpc2l0ZW0iLCJoZWFkZXIiLCJtZXRhIiwiaGlzYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiYW5zd2VyIiwiZmx1aWQiLCJwdXNoIiwicmVuZGVyQ2FtcGFpZ25zIiwidGFyZ2V0IiwidmFsdWUiLCJxdWVyeSIsIlN0dWRlbnRzQWRkcmVzcyIsIlN0dWRhZGQiLCJjb3VudCIsIm51bWJlcm9mUSIsInF1ZXN0IiwiaSIsImFkZHJlcyIsIm15dGVzdCIsImoiLCJzZW5kcmVzcG9uc2UiLCJkZXRhaWwiLCJteXJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBTSxBQUFRLEFBQU8sQUFBUyxBQUFNOztBQUM3QyxBQUFPLEFB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LEFBRW9CLEFBQ2hCO2VBQVMsS0FBQSxBQUFLLE1BSGxCLEFBR3dCLEFBQ3BCO2tCQUFhLHlCQUFBO2lCQUNULE9BQUEsQUFBSyxTQUFTLEVBQUUsVUFBVyxNQUFBLEFBQU0sT0FEeEIsQUFDVCxBQUFjLEFBQTBCO0FBTGhEOztvQkFBQTtzQkFISixBQUNFLEFBRUUsQUFRRjtBQVJFO0FBQ0ksMkJBT04sQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEO29CQUFsRDtzQkFYRixBQVdFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckM7b0JBQUE7c0JBQUE7QUFBQTtTQWJGLEFBQ0EsQUFZRSxBQUVGLDBCQUFBLEFBQUMsZ0NBQUssU0FBVyxLQUFBLEFBQUssTUFBdEIsQUFBNEI7b0JBQTVCO3NCQTVCUixBQUNJLEFBRUksQUFVQSxBQWVBLEFBTVQ7QUFOUzs7Ozs7OzZHLEFBbkhxQjs7Ozs7bUJBQ2pCO0EsMEJBQVksTSxBQUFNLE1BQWxCLEEsQUFDRjtBLDJCQUFXLG9CQUFTLE1BQUEsQUFBTSxNQUFmLEEsQUFBcUI7O3VCQUNoQixTQUFBLEFBQVMsUUFBVCxBQUFpQixrQkFBakIsQSxBQUFtQzs7bUJBQW5EO0Esb0NBQ0E7QSx3QkFBUSxRQUFRLEE7O3VCQUNGLFNBQUEsQUFBUyxRQUFULEFBQWlCLFlBQWpCLEEsQUFBNkI7O21CQUEzQztBLGtDQUNOOztBQUNNO0EsNEIsQUFBWSxBQUVkO29CQUFFLEE7OztzQkFBRSxJQUFFLEE7OztBQUNGOztBLHlCQUFTLFEsQUFBQSxBQUFRLEFBQ2pCO0EseUJBQVMsQSxBQUNYO29CLEFBQUk7OztzQkFBRSxJQUFFLEE7Ozs7Ozt1QkFDVyxTQUFBLEFBQVMsUUFBVCxBQUFpQixhQUFqQixBQUE4QixRQUE5QixBQUFxQyxHQUFHLEEsQUFBeEM7O21CQUFmO0EsbUNBQ0E7QTs4QkFBUSxBQUNBLEFBQ1o7NEJBQVUsT0FGRSxBQUVGLEFBQU8sQUFDakI7MEJBQVEsT0FISSxBQUdKLEFBQU8sQSxBQUVqQjtBQUxjLEFBQ1o7O3VCQUlGLEFBQU8sS0FBUCxBQUFZOzttQkFQSTtBOzs7O21CQVNsQjswQkFBQSxBQUFVLEtBQVYsQUFBZTs7bUJBWkQ7QTs7OzttQkFjaEI7d0JBQUEsQUFBUSxJQUFJLFVBQVosQUFBWSxBQUFVLEFBQ3RCOzs7MkJBQ08sQUFFTDs2QkFGSyxBO0FBQUEsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWxDaUIsQSxBQW9JM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZWRpdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9qYXlncHQvRGVza3RvcC9Ta2lsbGNvZGUifQ==