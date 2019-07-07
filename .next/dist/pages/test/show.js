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

var _enroll = require('../../components/enroll');

var _enroll2 = _interopRequireDefault(_enroll);

var _routes = require('../../routes');

var _testattempt = require('../../components/testattempt');

var _testattempt2 = _interopRequireDefault(_testattempt);

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
          Studentscount = _props.Studentscount,
          number = _props.number,
          address = _props.address,
          examineradd = _props.examineradd,
          instructions = _props.instructions;

      var items = [{
        header: examineradd,
        meta: 'Address of Examiner',
        description: _react2.default.createElement(_routes.Link, { route: '/test/at/' + address + '/addnew', __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
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
      }, {
        header: Studentscount,
        meta: 'Total Number of Students',
        description: 'Number of Students enrolled in Test',
        style: { overflowWrap: 'break-word' }
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'This Test'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_enroll2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), _react2.default.createElement(_testattempt2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(_routes.Link, { route: '/test/at/' + this.props.address + '/response', __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'Responses')))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, examiner, questioncount, inst, Students;
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
                _context.next = 13;
                return campaign.methods.StudentsAddress().call();

              case 13:
                Students = _context.sent;
                return _context.abrupt('return', {
                  Studentscount: Students.length,
                  number: questioncount,
                  address: props.query.address,
                  examineradd: examiner,
                  instructions: inst
                });

              case 15:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Rlc3Qvc2hvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJmYWN0b3J5IiwiQ29udHJpYnV0ZUZvcm0iLCJFbnJvbGxGb3JtIiwiTGluayIsIlJvdXRlciIsIkF0dGVtcHQiLCJDYW1wYWlnblNob3ciLCJwcm9wcyIsIlN0dWRlbnRzY291bnQiLCJudW1iZXIiLCJhZGRyZXNzIiwiZXhhbWluZXJhZGQiLCJpbnN0cnVjdGlvbnMiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwicmVuZGVyQ2FyZHMiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImNhbGwiLCJleGFtaW5lciIsIm51bWJlcm9mUSIsInF1ZXN0aW9uY291bnQiLCJ0b3RhbGluc3RydWN0aW9uIiwiaW5zdCIsImNvbnNvbGUiLCJsb2ciLCJTdHVkZW50c0FkZHJlc3MiLCJTdHVkZW50cyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTTs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQVMsQUFBTSxBQUFjOztBQUM3QixBQUFPLEFBQWE7Ozs7Ozs7OztJLEFBRWQ7Ozs7Ozs7Ozs7O2tDQW1CYzttQkFPUixLQVBRLEFBT0g7VUFQRyxBQUVWLHVCQUZVLEFBRVY7VUFGVSxBQUdWLGdCQUhVLEFBR1Y7VUFIVSxBQUlWLGlCQUpVLEFBSVY7VUFKVSxBQUtWLHFCQUxVLEFBS1Y7VUFMVSxBQU1WLHNCQU5VLEFBTVYsQUFHRjs7VUFBTTtnQkFDSixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUNBQ0UsQUFBQyw4QkFBSyxxQkFBQSxBQUFtQixVQUF6QjtzQkFBQTt3QkFBQSxBQUNFO0FBREY7U0FBQSxrQkFDRSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsV0FMTixBQUlJLEFBQ0UsQUFHSjtlQUFPLEVBQUUsY0FUQyxBQUNaLEFBUVMsQUFBZ0I7QUFSekIsQUFDRSxPQUZVO2dCQVdaLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUlJLEFBQ0Y7ZUFBTyxFQUFFLGNBaEJDLEFBV1osQUFLUyxBQUFnQjtBQUx6QixBQUNFO2dCQU1GLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUlJLEFBQ0Y7ZUFBTyxFQUFFLGNBdkJDLEFBa0JaLEFBS1MsQUFBZ0I7QUFMekIsQUFDRTtnQkFNRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFJSSxBQUNGO2VBQU8sRUFBRSxjQTlCYixBQUFjLEFBeUJaLEFBS1MsQUFBZ0IsQUFJM0I7QUFURSxBQUNFOzsyQ0FRRyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUVGLEFBQ0w7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDQTtBQURBO0FBQUEsT0FBQSxrQkFDQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FEQSxBQUNBLEFBQ0EsOEJBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFBeUI7QUFBekI7Y0FERixBQUNFLEFBQXlCLEFBQUssQUFFOUIsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsa0NBQVcsU0FBVyxLQUFBLEFBQUssTUFBNUIsQUFBa0M7b0JBQWxDO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLEFBQUMsdUNBQVEsU0FBVyxLQUFBLEFBQUssTUFBekIsQUFBK0I7b0JBQS9CO3NCQVBKLEFBRUEsQUFHRSxBQUVFLEFBR0o7QUFISTs0QkFHSixBQUFDOztvQkFBRDtzQkFBQSxBQUNBO0FBREE7QUFBQSx5QkFDQSxBQUFDLDhCQUFLLHFCQUFtQixLQUFBLEFBQUssTUFBeEIsQUFBOEIsVUFBcEM7b0JBQUE7c0JBQUEsQUFDSTtBQURKO3lCQUNJLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sU0FBUjtvQkFBQTtzQkFBQTtBQUFBO1NBZFIsQUFDRSxBQVVBLEFBQ0EsQUFDSSxBQUNFLEFBTVQ7Ozs7OzJHQXBGd0IsQTs7Ozs7bUJBQ3ZCO0FBQ007QSwyQkFBVyxvQkFBUyxNQUFBLEFBQU0sTUFBTSxBLEFBQXJCOzt1QkFDTSxTQUFBLEFBQVMsUUFBVCxBQUFpQixjLEFBQWpCLEFBQStCOzttQkFBaEQ7QTs7dUJBQ3NCLFNBQUEsQUFBUyxRQUFULEFBQWlCLFksQUFBakIsQUFBNkI7O21CQUFuRDtBOzt1QkFDYSxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsaUJBQWlCLE1BQUEsQUFBTSxNQUF2QyxBQUE2QyxTLEFBQTdDLEFBQXNEOzttQkFBbkU7QSxnQ0FDTjs7d0JBQUEsQUFBUSxJQUFJLE1BQUEsQUFBTSxNQUFsQixBQUF3Qjs7dUJBQ0QsU0FBQSxBQUFTLFFBQVQsQUFBaUIsa0JBQWpCLEFBQW1DLEE7O21CQUFwRDtBOztpQ0FHVyxTQURWLEFBQ21CLEFBQ3hCOzBCQUZLLEFBRUcsQUFDUjsyQkFBUyxNQUFBLEFBQU0sTUFIVixBQUdnQixBQUNyQjsrQkFKSyxBQUlRLEFBQ2I7Z0MsQUFMSyxBQUtTO0FBTFQsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVhpQixBLEFBd0YzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2pheWdwdC9EZXNrdG9wL1NraWxsY29kZSJ9