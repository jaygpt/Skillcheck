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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Test = require('../../ethereum/Test');

var _Test2 = _interopRequireDefault(_Test);

var _factory = require('../../ethereum/factory2');

var _factory2 = _interopRequireDefault(_factory);

var _answer = require('../../components/answer');

var _answer2 = _interopRequireDefault(_answer);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jaygpt/Desktop/Skillcode/pages/test/show.js?entry';


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          number = _props.number,
          address = _props.address,
          examineradd = _props.examineradd,
          instructions = _props.instructions;

      var items = [{
        header: examineradd,
        meta: 'Address of Examiner',
        description: _react2.default.createElement(_routes.Link, { route: '/test/at/' + address + '/addnew', __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, '\'Examiner have right to  access your test-score\'')),
        style: { overflowWrap: 'break-word' }
      }, {
        header: "Instruction",
        meta: 'Read instruction carefuly',
        description: instructions,
        style: { overflowWrap: 'break-word' }
      }, {
        header: number,
        meta: 'Total Number of Question',
        description: 'All are compulsory to answer',
        style: { overflowWrap: 'break-word' }
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'This Test'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_answer2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, examiner, questioncount, inst;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //console.log(props.query.address);
                campaign = (0, _Test2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.examineradd().call();

              case 3:
                examiner = _context.sent;
                _context.next = 6;
                return campaign.methods.numberofQ().call();

              case 6:
                questioncount = _context.sent;
                _context.next = 9;
                return _factory2.default.methods.totalinstruction(props.query.address).call();

              case 9:
                inst = _context.sent;

                console.log(props.query.address);

                return _context.abrupt('return', {
                  number: questioncount,
                  address: props.query.address,
                  examineradd: examiner,
                  instructions: inst
                });

              case 12:
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

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Rlc3Qvc2hvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJHcmlkIiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJmYWN0b3J5IiwiQ29udHJpYnV0ZUZvcm0iLCJMaW5rIiwiUm91dGVyIiwiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJudW1iZXIiLCJhZGRyZXNzIiwiZXhhbWluZXJhZGQiLCJpbnN0cnVjdGlvbnMiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwicmVuZGVyQ2FyZHMiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImNhbGwiLCJleGFtaW5lciIsIm51bWJlcm9mUSIsInF1ZXN0aW9uY291bnQiLCJ0b3RhbGluc3RydWN0aW9uIiwiaW5zdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBUyxBQUFNLEFBQWM7Ozs7Ozs7SSxBQUV2Qjs7Ozs7Ozs7Ozs7a0NBaUJjO21CQU1SLEtBTlEsQUFNSDtVQU5HLEFBRVYsZ0JBRlUsQUFFVjtVQUZVLEFBR1YsaUJBSFUsQUFHVjtVQUhVLEFBSVYscUJBSlUsQUFJVjtVQUpVLEFBS1Ysc0JBTFUsQUFLVixBQUdGOztVQUFNO2dCQUNKLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQ0FDRSxBQUFDLDhCQUFLLHFCQUFBLEFBQW1CLFVBQXpCO3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGtCQUNFLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxXQUxOLEFBSUksQUFDRSxBQUdKO2VBQU8sRUFBRSxjQVRDLEFBQ1osQUFRUyxBQUFnQjtBQVJ6QixBQUNFLE9BRlU7Z0JBV1osQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQUhGLEFBSUksQUFDRjtlQUFPLEVBQUUsY0FoQkMsQUFXWixBQUtTLEFBQWdCO0FBTHpCLEFBQ0U7Z0JBTUYsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQUhGLEFBSUksQUFDRjtlQUFPLEVBQUUsY0F2QmIsQUFBYyxBQWtCWixBQUtTLEFBQWdCLEFBSTNCO0FBVEUsQUFDRTs7MkNBUUcsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFFRixBQUNMOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLE9BQUEsa0JBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREEsQUFDQSxBQUNBLDhCQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQXlCO0FBQXpCO2NBREYsQUFDRSxBQUF5QixBQUFLLEFBRTlCLGdDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLGtDQUFlLFNBQVcsS0FBQSxBQUFLLE1BQWhDLEFBQXNDO29CQUF0QztzQkFQTixBQUNFLEFBRUEsQUFHRSxBQUNFLEFBTVA7QUFOTzs7Ozs7OzJHLEFBN0RpQjs7Ozs7bUJBQ3ZCO0FBQ007QSwyQkFBVyxvQkFBUyxNQUFBLEFBQU0sTUFBZixBQUFxQixBOzt1QkFDZixTQUFBLEFBQVMsUUFBVCxBQUFpQixjQUFqQixBQUErQixBOzttQkFBaEQ7QTs7dUJBQ3NCLFNBQUEsQUFBUyxRQUFULEFBQWlCLFlBQWpCLEFBQTZCLEE7O21CQUFuRDtBOzt1QkFDYSxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsaUJBQWlCLE1BQUEsQUFBTSxNQUF2QyxBQUE2QyxTQUE3QyxBQUFzRCxBOzttQkFBbkU7QSxnQ0FDTjs7d0JBQUEsQUFBUSxJQUFJLE1BQUEsQUFBTSxNQUFsQixBQUF3Qjs7OzBCQUVqQixBQUNHLEFBQ1I7MkJBQVMsTUFBQSxBQUFNLE1BRlYsQUFFZ0IsQUFDckI7K0JBSEssQUFHUSxBQUNiO2dDQUpLLEFBSVMsQTtBQUpULEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFWaUIsQSxBQXVFM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9qYXlncHQvRGVza3RvcC9Ta2lsbGNvZGUifQ==