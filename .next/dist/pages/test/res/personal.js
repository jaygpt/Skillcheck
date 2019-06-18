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
              lineNumber: 36
            }
          }, details.answer),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Responses by ', this.props.add, ' for ', this.props.add), _react2.default.createElement(_routes.Link, { route: '/test/at/' + this.props.address + '/response', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Show Response')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement(_routes.Link, { route: '/test/test', __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Test Info',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }))), this.renderCampaigns()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, add, campaign, quest, Responses, i, detail, myres;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                add = props.query.add;
                campaign = (0, _Test2.default)(props.query.address);
                //const Studadd = await campaign.methods.StudentsAddress().call();
                //const count = Studadd.length;

                _context.next = 5;
                return campaign.methods.numberofQ().call();

              case 5:
                quest = _context.sent;

                //sendresponse
                Responses = [];
                i = 0;
                i = 0;

              case 9:
                if (!(i < quest)) {
                  _context.next = 18;
                  break;
                }

                _context.next = 12;
                return campaign.methods.sendresponse(props.query.add, i).call();

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
                return _context.abrupt('return', { address: address, Responses: Responses, add: add });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Rlc3QvcmVzL3BlcnNvbmFsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiQ2FyZCIsIkxpbmsiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIndlYjMiLCJSZXNwb25zZSIsIml0ZW1zIiwicHJvcHMiLCJSZXNwb25zZXMiLCJtYXAiLCJoZWFkZXIiLCJkZXRhaWxzIiwicXVlc3Rpb24iLCJkZXNjcmlwdGlvbiIsImFuc3dlciIsImZsdWlkIiwiYWRkIiwiYWRkcmVzcyIsInJlbmRlckNhbXBhaWducyIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJtZXRob2RzIiwibnVtYmVyb2ZRIiwiY2FsbCIsInF1ZXN0IiwiaSIsInNlbmRyZXNwb25zZSIsImRldGFpbCIsIm15cmVzIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVE7O0FBQ2pCLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7Ozs7OztJQUVYLEE7Ozs7Ozs7Ozs7O3NDQXVCYyxBQUNoQjtVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLG1CQUFXLEFBQ2hEOztrQkFDVSxRQURILEFBQ1csQUFDaEI7dUNBQ0EsY0FBQTs7d0JBQUE7MEJBQUEsQUFDRztBQURIO0FBQUEsV0FBQSxVQUhLLEFBR0wsQUFDVyxBQUdYO2lCQVBGLEFBQU8sQUFPRSxBQUVWO0FBVFEsQUFDTDtBQUZKLEFBQWMsQUFZZCxPQVpjOzsyQ0FZUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBa0Isc0JBQUEsQUFBSyxNQUF2QixBQUE2QixLQUFVLGNBQUEsQUFBSyxNQUQ5QyxBQUNFLEFBQWtELEFBQ2xELHNCQUFBLEFBQUMsOEJBQUsscUJBQW1CLEtBQUEsQUFBSyxNQUF4QixBQUE4QixVQUFwQztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSEosQUFFRSxBQUNFLEFBSUYsbUNBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUE7YUFDRSxBQUNNLEFBQ0o7Y0FGRixBQUVPOztvQkFGUDtzQkFERixBQUNFLEFBSUE7QUFKQTtBQUNFLDBCQUdGLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDO2lCQUFELEFBQ1UsQUFDUjtpQkFGRixBQUVVLEFBQ1I7Y0FIRixBQUdPLEFBQ0w7aUJBSkY7O29CQUFBO3NCQVBOLEFBS0UsQUFDRSxBQUNFLEFBUUg7QUFSRztBQUNFLGlCQWhCWixBQUNFLEFBT0UsQUFlRyxBQUFLLEFBSWI7Ozs7OzJHLEFBbEU0Qjs7Ozs7bUJBQ25CO0EsMEJBQVksTUFBTSxBLE1BQWxCLEEsQUFDQTtBLHNCQUFRLE1BQU0sQSxNQUFkLEEsQUFDRjtBLDJCQUFXLG9CQUFTLE1BQUEsQUFBTSxNQUFmLEFBQXFCLEFBQ3RDLEE7QUFDQTs7Ozt1QkFDb0IsU0FBQSxBQUFTLFFBQVQsQUFBaUIsWUFBWSxBLEFBQTdCOzttQkFBZDtBLGlDQUNOOztBQUNNO0EsNEJBQ0YsQSxBQURjO0Esb0JBQ1YsQSxBQUNKO29CLEFBQUk7OztzQkFBRyxJQUFHLEE7Ozs7Ozt1QkFDUyxTQUFBLEFBQVMsUUFBVCxBQUFpQixhQUFhLE1BQUEsQUFBTSxNQUFwQyxBQUEwQyxLQUExQyxBQUErQyxHQUEvQyxBLEFBQWtEOzttQkFBakU7QSxrQ0FDQTtBOzRCQUNNLE9BREUsQUFDRixBQUFPLEFBQ2pCOzBCQUFRLE9BRkksQUFFSixBLEFBQU8sQUFFakI7QUFKYyxBQUNaOzswQkFHRixBQUFVLEtBQVYsQUFBZTs7bUJBTkk7QTs7Ozs7aURBVWQsRUFBRSxTQUFGLFNBQVcsV0FBWCxXQUFxQixLQUFyQixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBckJZLEEsQUFzRXZCOztrQkFBQSxBQUFlIiwiZmlsZSI6InBlcnNvbmFsLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2pheWdwdC9EZXNrdG9wL1NraWxsY29kZSJ9