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

var _jsxFileName = '/home/jaygpt/Desktop/Skillcode/pages/test/finalize.js?entry';


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'renderCards',
    value: function renderCards() {
      //     const {
      //       Studentscount,
      //       number,
      //       address,
      //       examineradd,
      //       instructions
      //     } = this.props;

      //     const items = [
      //       {
      //         header: examineradd,
      //         meta: 'Address of Examiner',
      //         description:(
      //           <Link route={`/test/at/${address}/addnew`}>
      //             <a>'Examiner have right to  access your test-score'</a>
      //           </Link>
      //           ),
      //         style: { overflowWrap: 'break-word' }
      //       },
      //       {
      //         header: "Instruction",
      //         meta: 'Read instruction carefuly',
      //         description:
      //           instructions,
      //         style: { overflowWrap: 'break-word' }
      //       },
      //       {
      //         header: number,
      //         meta: 'Total Number of Question',
      //         description:
      //           'All are compulsory to answer',
      //         style: { overflowWrap: 'break-word' }
      //       },
      //       {
      //         header: Studentscount,
      //         meta: 'Total Number of Students',
      //         description:
      //           'Number of Students enrolled in Test',
      //         style: { overflowWrap: 'break-word' }
      //       }
      //     ];

      //     return <Card.Group items={items} />;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, 'This Test'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      })), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, _react2.default.createElement(_routes.Link, { route: '/test/at/' + this.props.address + '/response', __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, 'Responses')))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, examiner, questioncount, inst, Students, marks, i, j, marksofevaluator, numberofevaluter, marksg, detail, bais, marksg2, m, marksprob, flag, newscore, k, final_score, marks2, p;
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
                _context.next = 12;
                return campaign.methods.StudentsAddress().call();

              case 12:
                Students = _context.sent;

                //console.log(Students.length);
                marks = [];
                marksofevaluator = [];

                console.log(Students);
                i = 0;

              case 17:
                if (!(i < Students.length)) {
                  _context.next = 56;
                  break;
                }

                _context.next = 20;
                return campaign.methods.number_of_evaluator(Students[i]).call();

              case 20:
                numberofevaluter = _context.sent;
                marksg = [];

                console.log(numberofevaluter);
                j = 0;

              case 24:
                if (!(j < numberofevaluter)) {
                  _context.next = 50;
                  break;
                }

                _context.next = 27;
                return campaign.methods.sendmarks(Students[i], j).call();

              case 27:
                detail = _context.sent;
                bais = 0;
                marksg2 = [];

                console.log(detail);
                m = 0;

              case 32:
                if (!(m < detail[1].length)) {
                  _context.next = 41;
                  break;
                }

                _context.next = 35;
                return campaign.methods.sendresponse(Students[i], m).call();

              case 35:
                marksprob = _context.sent;

                //console.log(marksprob);
                if (marksprob[2] != -1) {
                  bais = (bais + marksprob[2] - detail[1][k]) / 2;
                }
                marksg2.push(detail[1][k]);

              case 38:
                m++;
                _context.next = 32;
                break;

              case 41:
                if (bais < 0) {
                  bais = bais * -1;
                }
                flag = false;

                for (m = 0; m < marksofevaluator.length; m++) {
                  if (marksofevaluator[m].addr == detail[0]) {
                    marksofevaluator[m].mark = marksofevaluator.mark + 1 - bais / 10;
                    flag = true;
                  }
                }
                if (!flag) {
                  newscore = {
                    addr: detail[0],
                    mark: 1 - bais / 10
                  };

                  marksofevaluator.push(newscore);
                }
                for (k = 0; k < detail[1].length; k++) {
                  marksg2[k] = marksg2[k] + bais;
                }
                marksg.push(marksg2);

              case 47:
                j++;
                _context.next = 24;
                break;

              case 50:
                final_score = [];

                for (k = 0; k < questioncount; k++) {
                  marks2 = 0;

                  for (p = 0; p < numberofevaluter; p++) {
                    marks2 = marks2 + marksg[p][k];
                  }
                  final_score.push(marks2 / numberofevaluter);
                }
                marks.push(final_score);

              case 53:
                i++;
                _context.next = 17;
                break;

              case 56:
                return _context.abrupt('return', {
                  marks_final: marks,
                  marks_of_eval: marksofevaluator,
                  Studentscount: Students.length,
                  number: questioncount,
                  address: props.query.address,
                  examineradd: examiner,
                  instructions: inst
                });

              case 57:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Rlc3QvZmluYWxpemUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIkxheW91dCIsIkNhbXBhaWduIiwiZmFjdG9yeSIsIkNvbnRyaWJ1dGVGb3JtIiwiRW5yb2xsRm9ybSIsIkxpbmsiLCJSb3V0ZXIiLCJBdHRlbXB0IiwiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJhZGRyZXNzIiwiY2FtcGFpZ24iLCJxdWVyeSIsIm1ldGhvZHMiLCJleGFtaW5lcmFkZCIsImNhbGwiLCJleGFtaW5lciIsIm51bWJlcm9mUSIsInF1ZXN0aW9uY291bnQiLCJ0b3RhbGluc3RydWN0aW9uIiwiaW5zdCIsIlN0dWRlbnRzQWRkcmVzcyIsIlN0dWRlbnRzIiwibWFya3MiLCJtYXJrc29mZXZhbHVhdG9yIiwiY29uc29sZSIsImxvZyIsImkiLCJsZW5ndGgiLCJudW1iZXJfb2ZfZXZhbHVhdG9yIiwibnVtYmVyb2ZldmFsdXRlciIsIm1hcmtzZyIsImoiLCJzZW5kbWFya3MiLCJkZXRhaWwiLCJiYWlzIiwibWFya3NnMiIsIm0iLCJzZW5kcmVzcG9uc2UiLCJtYXJrc3Byb2IiLCJrIiwicHVzaCIsImZsYWciLCJhZGRyIiwibWFyayIsIm5ld3Njb3JlIiwiZmluYWxfc2NvcmUiLCJtYXJrczIiLCJwIiwibWFya3NfZmluYWwiLCJtYXJrc19vZl9ldmFsIiwiU3R1ZGVudHNjb3VudCIsIm51bWJlciIsImluc3RydWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTTs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQVMsQUFBTSxBQUFjOztBQUM3QixBQUFP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QSxBQUNYOztxQkFBSSxJQUFKLEFBQVEsR0FBRSxJQUFFLGlCQUFaLEFBQTZCLFFBQTdCLEFBQW9DLEtBQUksQUFDdEM7c0JBQUcsaUJBQUEsQUFBaUIsR0FBakIsQUFBb0IsUUFBUSxPQUEvQixBQUErQixBQUFPLElBQUcsQUFDdkM7cUNBQUEsQUFBaUIsR0FBakIsQUFBb0IsT0FBTyxpQkFBQSxBQUFpQixPQUFqQixBQUF3QixJQUFJLE9BQXZELEFBQTRELEFBQzVEOzJCQUFBLEFBQU8sQUFDUjtBQUNGO0FBQ0Q7b0JBQUcsQ0FBSCxBQUFJLE1BQUssQUFDSDtBQURHOzBCQUVDLE9BRE8sQUFDUCxBQUFPLEFBQ2I7MEJBQU0sSUFBSSxPQUhMLEFBQ1EsQUFFRSxBQUVqQjtBQUplLEFBQ2I7O21DQUdGLEFBQWlCLEtBQWpCLEFBQXNCLEFBQ3ZCO0FBQ0Q7cUJBQUEsQUFBUSxJQUFSLEFBQVksR0FBRSxJQUFFLE9BQUEsQUFBTyxHQUF2QixBQUEwQixRQUExQixBQUFpQyxLQUFJLEFBQ25DOzBCQUFBLEFBQVEsS0FBSyxRQUFBLEFBQVEsS0FBckIsQUFBMEIsQUFDM0I7QUFDRDt1QkFBQSxBQUFPLEtBQVAsQUFBWTs7bUJBakNlO0E7Ozs7bUJBbUN6QjtBLDhCQUFjLEEsQUFDbEI7O3FCQUFBLEFBQVEsSUFBUixBQUFZLEdBQUksSUFBaEIsQUFBa0IsZUFBbEIsQUFBZ0MsS0FBSSxBQUM5QjtBQUQ4QiwyQkFBQSxBQUNyQixBQUNiOzt1QkFBQSxBQUFRLElBQVIsQUFBWSxHQUFFLElBQWQsQUFBZ0Isa0JBQWhCLEFBQWlDLEtBQUksQUFDbkM7NkJBQVMsU0FBUyxPQUFBLEFBQU8sR0FBekIsQUFBa0IsQUFBVSxBQUM3QjtBQUNEOzhCQUFBLEFBQVksS0FBSyxTQUFqQixBQUF3QixBQUN6QjtBQUNEO3NCQUFBLEFBQU0sS0FBTixBQUFXOzttQkEvQ2E7QTs7Ozs7OytCQWtEbkIsQUFDUSxBQUNiO2lDQUZLLEFBRVUsQUFDZjtpQ0FBZSxTQUhWLEFBR21CLEFBQ3hCOzBCQUpLLEFBSUcsQUFDUjsyQkFBUyxNQUFBLEFBQU0sTUFMVixBQUtnQixBQUNyQjsrQkFOSyxBQU1RLEFBQ2I7Z0NBUEssQUFPUyxBO0FBUFQsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWhFaUIsQSxBQTJJM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZmluYWxpemUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvamF5Z3B0L0Rlc2t0b3AvU2tpbGxjb2RlIn0=