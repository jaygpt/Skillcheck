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
              lineNumber: 40
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          }, details)),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Responses'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Show Response')), _react2.default.createElement('div', {
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
      }), _react2.default.createElement(_routes.Link, { route: '/test/newtest', __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Test Info',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Rlc3QvcmVzL3Jlc3BvbnNlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiQ2FyZCIsIkxpbmsiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIndlYjMiLCJSZXNwb25zZSIsIml0ZW1zIiwicHJvcHMiLCJTdHVkYWRkIiwibWFwIiwibWV0YSIsImRlc2NyaXB0aW9uIiwiYWRkcmVzcyIsImRldGFpbHMiLCJmbHVpZCIsInJlbmRlckNhbXBhaWducyIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiU3R1ZGVudHNBZGRyZXNzIiwiY2FsbCIsImNvdW50IiwibGVuZ3RoIiwibnVtYmVyb2ZRIiwicXVlc3QiLCJSZXNwb25zZXMiLCJpIiwiYWRkcmVzIiwibXl0ZXN0IiwiaiIsInNlbmRyZXNwb25zZSIsImRldGFpbCIsIm15cmVzIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJwdXNoIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVE7O0FBQ2pCLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7Ozs7OztJQUVYLEE7Ozs7Ozs7Ozs7O3NDQTJCYzttQkFDaEI7O1VBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLElBQUksbUJBQVcsQUFDOUM7O2dCQUFPLEFBQ0MsQUFDTjt1Q0FDQSxBQUFDLDhCQUFLLHFCQUFtQixPQUFBLEFBQUssTUFBeEIsQUFBOEIsb0JBQXBDLEFBQW1EO3dCQUFuRDswQkFBQSxBQUNFO0FBREY7V0FBQSxrQkFDRSxjQUFBOzt3QkFBQTswQkFBQSxBQUFJO0FBQUo7QUFBQSxhQUpHLEFBR0wsQUFDRSxBQUdGO2lCQVBGLEFBQU8sQUFPRSxBQUVWO0FBVFEsQUFDTDtBQUZKLEFBQWMsQUFZZCxPQVpjOzsyQ0FZUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsOEJBQUEsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQWhDLEFBQXNDO29CQUF0QztzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSEosQUFFRSxBQUNFLEFBSUYsbUNBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUE7YUFDRSxBQUNNLEFBQ0o7Y0FGRixBQUVPOztvQkFGUDtzQkFERixBQUNFLEFBSUE7QUFKQTtBQUNFLDBCQUdGLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDO2lCQUFELEFBQ1UsQUFDUjtpQkFGRixBQUVVLEFBQ1I7Y0FIRixBQUdPLEFBQ0w7aUJBSkY7O29CQUFBO3NCQVBOLEFBS0UsQUFDRSxBQUNFLEFBUUg7QUFSRztBQUNFLGlCQWhCWixBQUNFLEFBT0UsQUFlRyxBQUFLLEFBSWI7Ozs7OzJHLEFBdEU0Qjs7Ozs7bUJBQ25CO0EsMEJBQVksTSxBQUFNLE1BQWxCLEEsQUFDRjtBLDJCQUFXLG9CQUFTLE1BQUEsQUFBTSxNQUFmLEEsQUFBcUI7O3VCQUNoQixTQUFBLEFBQVMsUUFBVCxBQUFpQixrQkFBakIsQUFBbUMsQTs7bUJBQW5EO0EsbUNBQ0E7QSx3QkFBUSxRLEFBQVE7O3VCQUNGLFNBQUEsQUFBUyxRQUFULEFBQWlCLFlBQWpCLEEsQUFBNkI7O21CQUEzQztBLGlDQUNOOztBQUNNO0EsNEIsQUFBWSxBQUVkO29CLEFBQUU7OztzQkFBRSxJLEFBQUU7OztBQUNGOztBLHlCQUFTLFFBQUEsQUFBUSxBLEFBQ2pCO0EseUIsQUFBUyxBQUNYO29CQUFJLEE7OztzQkFBRSxJQUFFLEE7Ozs7Ozt1QkFDVyxTQUFBLEFBQVMsUUFBVCxBQUFpQixhQUFqQixBQUE4QixRQUE5QixBQUFxQyxHLEFBQXJDLEFBQXdDOzttQkFBdkQ7QSxrQ0FDQTtBOzRCQUNNLE9BREUsQUFDRixBQUFPLEFBQ2pCOzBCQUFRLE9BRkksQUFFSixBQUFPLEEsQUFFakI7QUFKYyxBQUNaOzt1QkFHRixBQUFPLEtBQVAsQUFBWTs7bUJBTkk7QTs7OzttQkFRbEI7MEJBQUEsQUFBVSxLQUFWLEFBQWU7O21CQVhEO0E7Ozs7bUJBYWhCO3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7d0JBQUEsQUFBUSxJQUFSLEFBQVk7aURBQ0wsRUFBRSxTQUFGLFNBQVcsU0FBWCxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBekJZLEEsQUEwRXZCOztrQkFBQSxBQUFlIiwiZmlsZSI6InJlc3BvbnNlLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2pheWdwdC9EZXNrdG9wL1NraWxsY29kZSJ9