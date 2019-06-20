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

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _giveresponse = require('../../../components/giveresponse');

var _giveresponse2 = _interopRequireDefault(_giveresponse);

var _Test = require('../../../ethereum/Test');

var _Test2 = _interopRequireDefault(_Test);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jaygpt/Desktop/Skillcode/pages/test/res/response.js?entry';


var Response = function (_Component) {
  (0, _inherits3.default)(Response, _Component);

  function Response() {
    (0, _classCallCheck3.default)(this, Response);

    return (0, _possibleConstructorReturn3.default)(this, (Response.__proto__ || (0, _getPrototypeOf2.default)(Response)).apply(this, arguments));
  }

  (0, _createClass3.default)(Response, [{
    key: 'renderCampaigns',
    value: function renderCampaigns() {
      var _this2 = this;

      var items = this.props.Studadd.map(function (details) {
        return {
          meta: 'Response',
          description: _react2.default.createElement(_routes.Link, { route: '/test/at/' + _this2.props.address + '/res/' + details, __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          }, details)),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'Responses'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Show Response')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), _react2.default.createElement(_routes.Link, { route: '/test/newtest', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Test Info',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }))), this.renderCampaigns()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, Studadd, count, quest, Responses, i, j, addres, mytest, detail, myres;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                campaign = (0, _Test2.default)(props.query.address);
                _context.next = 4;
                return campaign.methods.StudentsAddress().call();

              case 4:
                Studadd = _context.sent;
                count = Studadd.length;
                _context.next = 8;
                return campaign.methods.numberofQ().call();

              case 8:
                quest = _context.sent;

                //sendresponse
                Responses = [];
                i = 0;

              case 11:
                if (!(i < count)) {
                  _context.next = 28;
                  break;
                }

                addres = Studadd[i];
                mytest = [];
                j = 0;

              case 15:
                if (!(j < quest)) {
                  _context.next = 24;
                  break;
                }

                _context.next = 18;
                return campaign.methods.sendresponse(addres, j).call();

              case 18:
                detail = _context.sent;
                myres = {
                  question: detail[0],
                  answer: detail[1]
                };

                mytest.push(myres);

              case 21:
                j++;
                _context.next = 15;
                break;

              case 24:
                Responses.push(mytest);

              case 25:
                i++;
                _context.next = 11;
                break;

              case 28:
                console.log(Responses);
                console.log(Studadd);
                return _context.abrupt('return', { address: address, Studadd: Studadd });

              case 31:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Response;
}(_react.Component);

exports.default = Response;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Rlc3QvcmVzL3Jlc3BvbnNlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiQ2FyZCIsIkxpbmsiLCJMYXlvdXQiLCJTdWJtaXRyZXNwb25zZSIsIkNhbXBhaWduIiwid2ViMyIsIlJlc3BvbnNlIiwiaXRlbXMiLCJwcm9wcyIsIlN0dWRhZGQiLCJtYXAiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJhZGRyZXNzIiwiZGV0YWlscyIsImZsdWlkIiwicmVuZGVyQ2FtcGFpZ25zIiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJTdHVkZW50c0FkZHJlc3MiLCJjYWxsIiwiY291bnQiLCJsZW5ndGgiLCJudW1iZXJvZlEiLCJxdWVzdCIsIlJlc3BvbnNlcyIsImkiLCJhZGRyZXMiLCJteXRlc3QiLCJqIiwic2VuZHJlc3BvbnNlIiwiZGV0YWlsIiwibXlyZXMiLCJxdWVzdGlvbiIsImFuc3dlciIsInB1c2giLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUTs7QUFDakIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7Ozs7Ozs7SUFFWCxBOzs7Ozs7Ozs7OztzQ0EyQmM7bUJBQ2hCOztVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixJQUFJLG1CQUFXLEFBQzlDOztnQkFBTyxBQUNDLEFBQ047dUNBQ0EsQUFBQyw4QkFBSyxxQkFBbUIsT0FBQSxBQUFLLE1BQXhCLEFBQThCLG9CQUFwQyxBQUFtRDt3QkFBbkQ7MEJBQUEsQUFDRTtBQURGO1dBQUEsa0JBQ0UsY0FBQTs7d0JBQUE7MEJBQUEsQUFBSTtBQUFKO0FBQUEsYUFKRyxBQUdMLEFBQ0UsQUFHRjtpQkFQRixBQUFPLEFBT0UsQUFFVjtBQVRRLEFBQ0w7QUFGSixBQUFjLEFBWWQsT0FaYzs7MkNBWVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDhCQUFBLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUFoQyxBQUFzQztvQkFBdEM7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUhKLEFBRUUsQUFDRSxBQUlGLG1DQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBO2FBQ0UsQUFDTSxBQUNKO2NBRkYsQUFFTzs7b0JBRlA7c0JBREYsQUFDRSxBQUlBO0FBSkE7QUFDRSwwQkFHRixBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQztpQkFBRCxBQUNVLEFBQ1I7aUJBRkYsQUFFVSxBQUNSO2NBSEYsQUFHTyxBQUNMO2lCQUpGOztvQkFBQTtzQkFQTixBQUtFLEFBQ0UsQUFDRSxBQVFIO0FBUkc7QUFDRSxpQkFoQlosQUFDRSxBQU9FLEFBZUcsQUFBSyxBQUtiOzs7OzsyR0F2RTRCLEE7Ozs7O21CQUNuQjtBLDBCQUFZLE0sQUFBTSxNLEFBQWxCLEFBQ0Y7QSwyQkFBVyxvQkFBUyxNQUFBLEFBQU0sTSxBQUFmLEFBQXFCOzt1QkFDaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsa0IsQUFBakIsQUFBbUM7O21CQUFuRDtBLG1DQUNBO0Esd0JBQVEsUUFBUSxBOzt1QkFDRixTQUFBLEFBQVMsUUFBVCxBQUFpQixZQUFqQixBQUE2QixBOzttQkFBM0M7QSxpQ0FDTjs7QUFDTTtBLDRCLEFBQVksQUFFZDtvQkFBRSxBOzs7c0JBQUUsSSxBQUFFOzs7QUFDRjs7QSx5QkFBUyxRQUFBLEFBQVEsQSxBQUNqQjtBLHlCLEFBQVMsQUFDWDtvQkFBSSxBOzs7c0JBQUUsSUFBRSxBOzs7Ozs7dUJBQ1csU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEIsUUFBOUIsQUFBcUMsR0FBckMsQUFBd0MsQTs7bUJBQXZEO0Esa0NBQ0E7QTs0QkFDTSxPQURFLEFBQ0YsQUFBTyxBQUNqQjswQkFBUSxPQUZJLEFBRUosQUFBTyxBLEFBRWpCO0FBSmMsQUFDWjs7dUJBR0YsQUFBTyxLQUFQLEFBQVk7O21CQU5JO0E7Ozs7bUJBUWxCOzBCQUFBLEFBQVUsS0FBVixBQUFlOzttQkFYRDtBOzs7O21CQWFoQjt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO3dCQUFBLEFBQVEsSUFBUixBQUFZO2lEQUNMLEVBQUUsU0FBRixTQUFXLFNBQVgsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXpCWSxBLEFBMkV2Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJyZXNwb25zZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9qYXlncHQvRGVza3RvcC9Ta2lsbGNvZGUifQ==