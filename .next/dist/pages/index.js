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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jaygpt/Desktop/Skillcode/pages/index.js?entry';


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
        return {
          header: details.instruction,
          description: _react2.default.createElement(_routes.Link, { route: '/wallets/' + details.address, __source: {
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
          lineNumber: 39
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'All Wallets'), _react2.default.createElement(_routes.Link, { route: '/campaign/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Create wallet',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }))), this.renderCampaigns()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaigns, Instruction, i, name, detail;
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
                return _factory2.default.methods.myname(campaigns[i]).call();

              case 8:
                name = _context.sent;
                detail = {
                  address: campaigns[i],
                  instruction: name
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkNvbnRhaW5lciIsIkJ1dHRvbiIsImZhY3RvcnkiLCJMYXlvdXQiLCJMaW5rIiwiQ2FtcGFpZ25JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJJbnN0cnVjdGlvbiIsIm1hcCIsImhlYWRlciIsImRldGFpbHMiLCJpbnN0cnVjdGlvbiIsImRlc2NyaXB0aW9uIiwiYWRkcmVzcyIsImZsdWlkIiwicmVuZGVyQ2FtcGFpZ25zIiwibWV0aG9kcyIsInRvdGFsd2FsbGV0IiwiY2FsbCIsImNhbXBhaWducyIsImkiLCJsZW5ndGgiLCJteW5hbWUiLCJuYW1lIiwiZGV0YWlsIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBVzs7QUFDMUIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7Ozs7Ozs7SUFFZixBOzs7Ozs7Ozs7OztzQ0FvQmMsQUFDaEI7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFlBQVgsQUFBdUIsSUFBSSxtQkFBVyxBQUNsRDs7a0JBQ1UsUUFESCxBQUNXLEFBQ2hCO3VDQUNBLEFBQUMsOEJBQUsscUJBQW1CLFFBQXpCLEFBQWlDO3dCQUFqQzswQkFBQSxBQUNBO0FBREE7V0FBQSxrQkFDQSxjQUFBOzt3QkFBQTswQkFBQSxBQUFJO0FBQUo7QUFBQSxxQkFKSyxBQUdMLEFBQ0EsQUFBWSxBQUVaO2lCQU5GLEFBQU8sQUFNRSxBQUVWO0FBUlEsQUFDTDtBQUZKLEFBQWMsQUFXZCxPQVhjOzsyQ0FXUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQTthQUNFLEFBQ00sQUFDSjtjQUZGLEFBRU87O29CQUZQO3NCQURGLEFBQ0UsQUFJQTtBQUpBO0FBQ0UsMEJBR0YsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBTEYsQUFLRSxBQUNBLGdDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDO2lCQUFELEFBQ1UsQUFDUjtpQkFGRixBQUVVLEFBQ1I7Y0FIRixBQUdPLEFBQ0w7aUJBSkY7O29CQUFBO3NCQVJOLEFBTUUsQUFDRSxBQUNFLEFBUUg7QUFSRztBQUNFLGlCQVhaLEFBQ0UsQUFDRSxBQWdCRyxBQUFLLEFBTWI7Ozs7Ozs7Ozs7Ozt1QkExRHlCLGtCQUFBLEFBQVEsUUFBUixBQUFnQixjQUFoQixBQUE4QixBOzttQkFBaEQ7QSxxQ0FFQTtBLDhCQUFjLEEsQUFFZjtvQixBQUFJOzs7c0JBQUUsSUFBRyxVQUFVLEE7Ozs7Ozt1QkFFSCxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsT0FBTyxVQUF2QixBQUF1QixBQUFVLElBQWpDLEFBQXFDLEE7O21CQUFsRDtBLGdDQUNGO0E7MkJBQ08sVUFERSxBQUNGLEFBQVUsQUFDbkI7K0IsQUFGVyxBQUVFLEFBRWY7QUFKYSxBQUNYOzs0QkFHRixBQUFZLEtBQVosQUFBaUIsQUFDakI7OzttQkFSNkI7QTs7Ozs7aURBV3hCLEVBQUUsV0FBRixXQUFjLGEsQUFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWpCaUIsQSxBQStENUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvamF5Z3B0L0Rlc2t0b3AvU2tpbGxjb2RlIn0=