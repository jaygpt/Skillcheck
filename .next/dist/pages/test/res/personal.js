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

var _Test = require('../../../ethereum/Test');

var _Test2 = _interopRequireDefault(_Test);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _giveresponse = require('../../../components/giveresponse');

var _giveresponse2 = _interopRequireDefault(_giveresponse);

var _becomegrader = require('../../../components/becomegrader');

var _becomegrader2 = _interopRequireDefault(_becomegrader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jaygpt/Desktop/Skillcode/pages/test/res/personal.js?entry';


var Response = function (_Component) {
  (0, _inherits3.default)(Response, _Component);

  function Response() {
    (0, _classCallCheck3.default)(this, Response);

    return (0, _possibleConstructorReturn3.default)(this, (Response.__proto__ || (0, _getPrototypeOf2.default)(Response)).apply(this, arguments));
  }

  (0, _createClass3.default)(Response, [{
    key: 'renderCampaigns',
    value: function renderCampaigns() {
      var items = this.props.Responses.map(function (details) {
        return {
          header: details.question,
          description: _react2.default.createElement('p', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          }, details.answer),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Responses by ', this.props.personal, ' for ', this.props.address), _react2.default.createElement(_routes.Link, { route: '/test/at/' + this.props.address + '/response', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Show Response')), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), this.renderCampaigns())), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_giveresponse2.default, { address: this.props.address, personal: this.props.personal, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_becomegrader2.default, { address: this.props.address, personal: this.props.personal, __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      })), _react2.default.createElement(_routes.Link, { route: '/test/at/' + this.props.address + '/response', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Test Info',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, personal, campaign, quest, Responses, i, detail, myres;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                personal = props.query.personal;
                campaign = (0, _Test2.default)(props.query.address);
                //const Studadd = await campaign.methods.StudentsAddress().call();
                //const count = Studadd.length;

                _context.next = 5;
                return campaign.methods.numberofQ().call();

              case 5:
                quest = _context.sent;

                //console.log(props.query.personal);
                Responses = [];
                i = 0;
                i = 0;

              case 9:
                if (!(i < quest)) {
                  _context.next = 18;
                  break;
                }

                _context.next = 12;
                return campaign.methods.sendresponse(props.query.personal, i).call();

              case 12:
                detail = _context.sent;
                myres = {
                  question: detail[0],
                  answer: detail[1]
                };

                Responses.push(myres);

              case 15:
                i++;
                _context.next = 9;
                break;

              case 18:
                return _context.abrupt('return', { address: address, Responses: Responses, personal: personal });

              case 19:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Rlc3QvcmVzL3BlcnNvbmFsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiQ2FyZCIsIkdyaWQiLCJMaW5rIiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiU3VibWl0cmVzcG9uc2UiLCJHcmFkZXIiLCJSZXNwb25zZSIsIml0ZW1zIiwicHJvcHMiLCJSZXNwb25zZXMiLCJtYXAiLCJoZWFkZXIiLCJkZXRhaWxzIiwicXVlc3Rpb24iLCJkZXNjcmlwdGlvbiIsImFuc3dlciIsImZsdWlkIiwicGVyc29uYWwiLCJhZGRyZXNzIiwicmVuZGVyQ2FtcGFpZ25zIiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJudW1iZXJvZlEiLCJjYWxsIiwicXVlc3QiLCJpIiwic2VuZHJlc3BvbnNlIiwiZGV0YWlsIiwibXlyZXMiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUSxBQUFNOztBQUN2QixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7OztzQ0F1QmMsQUFDaEI7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxtQkFBVyxBQUNoRDs7a0JBQ1UsUUFESCxBQUNXLEFBQ2hCO3VDQUNBLGNBQUE7O3dCQUFBOzBCQUFBLEFBQ0c7QUFESDtBQUFBLFdBQUEsVUFISyxBQUdMLEFBQ1csQUFHWDtpQkFQRixBQUFPLEFBT0UsQUFFVjtBQVRRLEFBQ0w7QUFGSixBQUFjLEFBWWQsT0FaYzs7MkNBWVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQWtCLHNCQUFBLEFBQUssTUFBdkIsQUFBNkIsVUFBZSxjQUFBLEFBQUssTUFEbkQsQUFDRSxBQUF1RCxBQUN2RCwwQkFBQSxBQUFDLDhCQUFLLHFCQUFtQixLQUFBLEFBQUssTUFBeEIsQUFBOEIsVUFBcEM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUhKLEFBRUUsQUFDRSxBQUlGLG1DQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBc0I7b0JBQXRCO3NCQUFBLEFBQ0Y7QUFERTt5QkFDRixjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQTthQUNFLEFBQ00sQUFDSjtjQUZGLEFBRU87O29CQUZQO3NCQURGLEFBQ0UsQUFLQztBQUxEO0FBQ0UsZUFKSixBQUNFLEFBQ0YsQUFNRyxBQUFLLEFBR1IscUNBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDQTtBQURBO3lCQUNDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0EsQUFBQyx3Q0FBZSxTQUFXLEtBQUEsQUFBSyxNQUFoQyxBQUFzQyxTQUFTLFVBQVksS0FBQSxBQUFLLE1BQWhFLEFBQXNFO29CQUF0RTtzQkFGQSxBQUNBLEFBQ0EsQUFFQTtBQUZBOzs7b0JBRUE7c0JBSkEsQUFJQSxBQUNBO0FBREE7QUFBQSwwQkFDQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsd0NBQU8sU0FBVyxLQUFBLEFBQUssTUFBeEIsQUFBOEIsU0FBUyxVQUFZLEtBQUEsQUFBSyxNQUF4RCxBQUE4RDtvQkFBOUQ7c0JBTkYsQUFLQSxBQUNFLEFBR0Y7QUFIRTsyQkFHRixBQUFDLDhCQUFLLHFCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7b0JBQUE7c0JBQUEsQUFDSTtBQURKO3lCQUNJLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFDVSxBQUNSO2lCQUZGLEFBRVUsQUFDUjtjQUhGLEFBR08sQUFDTDtpQkFKRjs7b0JBQUE7c0JBOUJWLEFBQ0UsQUFPRSxBQVdBLEFBU0EsQUFDSSxBQUNFLEFBY1g7QUFkVztBQUNFOzs7OzsyRyxBQXRFZTs7Ozs7bUJBQ25CO0EsMEJBQVksTSxBQUFNLE1BQWxCLEFBQ0EsQTtBLDJCQUFhLE1BQU0sQSxNQUFuQixBLEFBQ0Y7QSwyQkFBVyxvQkFBUyxNQUFBLEFBQU0sTUFBZixBQUFxQixBQUN0QyxBO0FBQ0E7Ozs7dUJBQ29CLFNBQUEsQUFBUyxRQUFULEFBQWlCLFlBQVksQSxBQUE3Qjs7bUJBQWQ7QSxpQ0FDTjs7QUFDTTtBLDRCLEFBQVksQUFDZDtBLG9CLEFBQUksQUFDSjtvQkFBSSxBOzs7c0JBQUcsSUFBRyxBOzs7Ozs7dUJBQ1MsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBYSxNQUFBLEFBQU0sTUFBcEMsQUFBMEMsVUFBMUMsQUFBb0QsR0FBcEQsQSxBQUF1RDs7bUJBQXRFO0Esa0NBQ0E7QTs0QkFDTSxPQURFLEFBQ0YsQUFBTyxBQUNqQjswQkFBUSxPLEFBRkksQUFFSixBQUFPLEFBRWpCO0FBSmMsQUFDWjs7MEJBR0YsQUFBVSxLQUFWLEFBQWU7O21CQU5JO0E7Ozs7O2lEQVVkLEVBQUUsU0FBRixTQUFXLFdBQVgsV0FBcUIsVSxBQUFyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXJCWSxBLEFBdUZ2Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJwZXJzb25hbC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9qYXlncHQvRGVza3RvcC9Ta2lsbGNvZGUifQ==