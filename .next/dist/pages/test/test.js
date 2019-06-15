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

var _factory = require('../../ethereum/factory2');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jaygpt/Desktop/Skillcode/pages/test/test.js?entry';


var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    (0, _classCallCheck3.default)(this, CampaignIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: 'renderCampaigns',
    value: function renderCampaigns() {
      var items = this.props.Instruction.map(function (details) {
        var add = details.address;
        return {
          header: details.instruction,
          description: _react2.default.createElement(_routes.Link, { route: '/test/at/' + add, __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          }, details.address)),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'List of all tests'), _react2.default.createElement(_routes.Link, { route: '/test/newtest', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Create Test',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }))), this.renderCampaigns()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaigns, Instruction, i, inst, detail;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.totalwallet().call();

              case 2:
                campaigns = _context.sent;
                Instruction = [];
                i = 0;

              case 5:
                if (!(i < campaigns.length)) {
                  _context.next = 14;
                  break;
                }

                _context.next = 8;
                return _factory2.default.methods.totalinstruction(campaigns[i]).call();

              case 8:
                inst = _context.sent;
                detail = {
                  address: campaigns[i],
                  instruction: inst
                };

                Instruction.push(detail);
              //console.log(Instruction);

              case 11:
                i++;
                _context.next = 5;
                break;

              case 14:
                return _context.abrupt('return', { campaigns: campaigns, Instruction: Instruction });

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Rlc3QvdGVzdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJDb250YWluZXIiLCJCdXR0b24iLCJmYWN0b3J5IiwiTGF5b3V0IiwiTGluayIsIlJvdXRlciIsIkNhbXBhaWduSW5kZXgiLCJpdGVtcyIsInByb3BzIiwiSW5zdHJ1Y3Rpb24iLCJtYXAiLCJhZGQiLCJkZXRhaWxzIiwiYWRkcmVzcyIsImhlYWRlciIsImluc3RydWN0aW9uIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckNhbXBhaWducyIsIm1ldGhvZHMiLCJ0b3RhbHdhbGxldCIsImNhbGwiLCJjYW1wYWlnbnMiLCJpIiwibGVuZ3RoIiwidG90YWxpbnN0cnVjdGlvbiIsImluc3QiLCJkZXRhaWwiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFXOztBQUMxQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBTSxBQUFjOzs7Ozs7O0lBRXZCLEE7Ozs7Ozs7Ozs7O3NDQW1CYyxBQUNoQjtVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsWUFBWCxBQUF1QixJQUFJLG1CQUFXLEFBQ2xEO1lBQU0sTUFBTSxRQUFaLEFBQW9CLEFBQ3BCOztrQkFDVSxRQURILEFBQ1csQUFDaEI7dUNBQ0EsQUFBQyw4QkFBSyxxQkFBTixBQUF5Qjt3QkFBekI7MEJBQUEsQUFDRTtBQURGO1dBQUEsa0JBQ0UsY0FBQTs7d0JBQUE7MEJBQUEsQUFBSTtBQUFKO0FBQUEscUJBSkcsQUFHTCxBQUNFLEFBQVksQUFHZDtpQkFQRixBQUFPLEFBT0UsQUFFVjtBQVRRLEFBQ0w7QUFISixBQUFjLEFBYWQsT0FiYzs7MkNBYVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUE7YUFDRSxBQUNNLEFBQ0o7Y0FGRixBQUVPOztvQkFGUDtzQkFERixBQUNFLEFBSUE7QUFKQTtBQUNFLDBCQUdGLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUxGLEFBS0UsQUFDQSxzQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQztpQkFBRCxBQUNVLEFBQ1I7aUJBRkYsQUFFVSxBQUNSO2NBSEYsQUFHTyxBQUNMO2lCQUpGOztvQkFBQTtzQkFSTixBQU1FLEFBQ0UsQUFDRSxBQVFIO0FBUkc7QUFDRSxpQkFYWixBQUNFLEFBQ0UsQUFnQkcsQUFBSyxBQU1iOzs7Ozs7Ozs7Ozs7dUJBM0R5QixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsY0FBaEIsQUFBOEIsQTs7bUJBQWhEO0EscUNBQ0E7QSw4QkFBYyxBLEFBRWY7b0IsQUFBSTs7O3NCQUFFLElBQUcsVUFBVSxBOzs7Ozs7dUJBRUwsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLGlCQUFpQixVQUFqQyxBQUFpQyxBQUFVLElBQTNDLEFBQStDLEE7O21CQUE1RDtBLGdDQUNBO0E7MkJBQ08sVUFERSxBQUNGLEFBQVUsQUFDbkI7K0IsQUFGVyxBQUVFLEFBRWY7QUFKYSxBQUNYOzs0QkFHRixBQUFZLEtBQVosQUFBaUIsQUFDakI7OzttQkFSNkI7QTs7Ozs7aURBV3hCLEVBQUUsV0FBRixXQUFjLGEsQUFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWhCaUIsQSxBQWdFNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoidGVzdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9qYXlncHQvRGVza3RvcC9Ta2lsbGNvZGUifQ==