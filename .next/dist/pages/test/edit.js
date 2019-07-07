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
                _context2.next = 9;
                return campaign.methods.examineradd().call();

              case 9:
                examiner = _context2.sent;

                console.log(examiner);
                if (examiner == accounts[0]) {
                  console.log('tRUE');
                  _routes.Router.pushRoute('/test/at/' + _this.props.address + '/finalize');
                } else {
                  console.log('False');
                  _this.setState({ errormessage: 'You are not examiner' });
                }
                _context2.next = 17;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2['catch'](2);

                _this.setState({ errormessage: _context2.t0.message });

              case 17:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[2, 14]]);
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
          lineNumber: 109
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, 'Add new question if you are examiner'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, this.renderCampaigns(), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onsubmit, error: !!this.state.errormessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errormessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, 'Finalize Marks'))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
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
          lineNumber: 125
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, 'Add!')), _react2.default.createElement(_prob2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 136
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Rlc3QvZWRpdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhbXBhaWduIiwiTGF5b3V0IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIkNhcmQiLCJHcmlkIiwid2ViMyIsIlJvdXRlciIsIlByb2IiLCJDYW1wYWlnblNob3ciLCJzdGF0ZSIsInF1ZXN0aW9uIiwiZXJyb3JNZXNzYWdlIiwiZXJyb3JtZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJhZGRRdWVzdGlvbiIsIlN0cmluZyIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsIm9uc3VibWl0IiwiZXhhbWluZXJhZGQiLCJjYWxsIiwiZXhhbWluZXIiLCJpdGVtcyIsImwiLCJSZXNwb25zZXMiLCJsZW5ndGgiLCJrIiwidGhpc2l0ZW0iLCJoZWFkZXIiLCJtZXRhIiwiaGlzYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiYW5zd2VyIiwiZmx1aWQiLCJwdXNoIiwicmVuZGVyQ2FtcGFpZ25zIiwidGFyZ2V0IiwidmFsdWUiLCJxdWVyeSIsIlN0dWRlbnRzQWRkcmVzcyIsIlN0dWRhZGQiLCJjb3VudCIsIm51bWJlcm9mUSIsInF1ZXN0IiwiaSIsImFkZHJlcyIsIm15dGVzdCIsImoiLCJzZW5kcmVzcG9uc2UiLCJkZXRhaWwiLCJteXJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBTSxBQUFRLEFBQU8sQUFBUyxBQUFNOztBQUM3QyxBQUFPLEFB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b0JBQUksQTs7O3NCQUFFLElBQUUsQTs7Ozs7O3VCQUNXLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCLFFBQTlCLEFBQXFDLEdBQXJDLEFBQXdDLEE7O21CQUF2RDtBLG1DQUNBO0E7OEJBQVEsQUFDQSxBQUNaOzRCQUFVLE9BRkUsQUFFRixBQUFPLEFBQ2pCOzBCQUFRLE8sQUFISSxBQUdKLEFBQU8sQUFFakI7QUFMYyxBQUNaOzt1QkFJRixBQUFPLEtBQVAsQUFBWTs7bUJBUEk7QTs7OzttQkFTbEI7MEJBQUEsQUFBVSxLQUFWLEFBQWU7O21CQVpEO0E7Ozs7bUJBY2hCO3dCQUFBLEFBQVEsSUFBSSxVQUFaLEFBQVksQUFBVSxBQUN0Qjs7OzJCQUNPLEFBRUw7NkIsQUFGSztBQUFBLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFsQ2lCLEEsQUF1STNCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImVkaXQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvamF5Z3B0L0Rlc2t0b3AvU2tpbGxjb2RlIn0=