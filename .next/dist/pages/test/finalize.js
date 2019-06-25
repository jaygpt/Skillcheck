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

var _wallet = require('../../ethereum/wallet');

var _wallet2 = _interopRequireDefault(_wallet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jaygpt/Desktop/Skillcode/pages/test/finalize.js?entry';


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

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var i, mywallet, _mywallet;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                console.log(_this.props.examineradd);
                i = 0;

              case 3:
                if (!(i < _this.props.consta.length)) {
                  _context.next = 10;
                  break;
                }

                mywallet = (0, _wallet2.default)(_this.props.consta[i].addre);
                _context.next = 7;
                return mywallet.methods.setscoretest(_this.props.consta[i].sum).send({
                  from: _this.props.examineradd
                });

              case 7:
                i++;
                _context.next = 3;
                break;

              case 10:
                i = 0;

              case 11:
                if (!(i < _this.props.marks_of_eval)) {
                  _context.next = 18;
                  break;
                }

                _mywallet = (0, _wallet2.default)(_this.props.marks_of_eval[i].addr);
                _context.next = 15;
                return _mywallet.methods.setscoretest(_this.props.marks_of_eval[i].mark).send({
                  from: _this.props.examineradd
                });

              case 15:
                i++;
                _context.next = 11;
                break;

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'newrender',
    value: function newrender() {
      var items = this.props.consta.map(function (details) {
        var add = details.addre;
        return {
          header: add,
          description: details.sum,
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      });
    }
  }, {
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          cosnta = _props.cosnta,
          marks_final = _props.marks_final,
          marks_of_eval = _props.marks_of_eval,
          Studentscount = _props.Studentscount,
          number = _props.number,
          address = _props.address,
          examineradd = _props.examineradd,
          instructions = _props.instructions,
          Student = _props.Student;

      var items = this.props.marks_of_eval.map(function (details) {
        var add = details.addr;
        return {
          header: add,
          description: details.mark,
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, 'This Test'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      })), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, this.renderCards(), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, 'Marks'), this.newrender(), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, 'Finalize Score')))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var campaign, examiner, questioncount, inst, Students, marks, i, j, marksofevaluator, numberofevaluter, marksg, detail, bais, marksg2, m, lengtha, marksprob, gh, k, flag, newscore, final_score, marks2, p, consta, thisa, sum, l, maarks;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                //console.log(props.query.address);
                campaign = (0, _Test2.default)(props.query.address);
                _context2.next = 3;
                return campaign.methods.examineradd().call();

              case 3:
                examiner = _context2.sent;
                _context2.next = 6;
                return campaign.methods.numberofQ().call();

              case 6:
                questioncount = _context2.sent;
                _context2.next = 9;
                return _factory2.default.methods.totalinstruction(props.query.address).call();

              case 9:
                inst = _context2.sent;
                _context2.next = 12;
                return campaign.methods.StudentsAddress().call();

              case 12:
                Students = _context2.sent;

                //console.log(Students.length);
                marks = [];
                marksofevaluator = [];
                //console.log(Students);

                i = 0;

              case 16:
                if (!(i < Students.length)) {
                  _context2.next = 55;
                  break;
                }

                _context2.next = 19;
                return campaign.methods.number_of_evaluator(Students[i]).call();

              case 19:
                numberofevaluter = _context2.sent;
                marksg = [];
                //console.log(numberofevaluter);

                j = 0;

              case 22:
                if (!(j < numberofevaluter)) {
                  _context2.next = 49;
                  break;
                }

                _context2.next = 25;
                return campaign.methods.sendmarks(Students[i], j).call();

              case 25:
                detail = _context2.sent;
                bais = 0;
                marksg2 = [];
                lengtha = 0;
                //console.log(detail);

                m = 0;

              case 30:
                if (!(m < questioncount)) {
                  _context2.next = 40;
                  break;
                }

                _context2.next = 33;
                return campaign.methods.sendresponse(Students[i], m).call();

              case 33:
                marksprob = _context2.sent;

                //console.log(typeof(marksprob[2]));
                if (marksprob[2] != '-1') {

                  bais = bais + parseInt(marksprob[2], 10) - parseInt(detail[1][m], 10);
                  lengtha++;
                  //console.log(bais);
                }
                gh = parseInt(detail[1][m], 10);

                marksg2.push(gh);

              case 37:
                m++;
                _context2.next = 30;
                break;

              case 40:

                for (k = 0; k < questioncount; k++) {
                  if (lengtha > 0) {
                    marksg2[k] = marksg2[k] + bais / lengtha;
                  }
                }
                marksg.push(marksg2);
                //console.log(marksg);
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

              case 46:
                j++;
                _context2.next = 22;
                break;

              case 49:
                final_score = [];

                for (k = 0; k < questioncount; k++) {
                  marks2 = 0;

                  for (p = 0; p < numberofevaluter; p++) {
                    marks2 = marks2 + marksg[p][k];
                  }
                  final_score.push(marks2 / numberofevaluter);
                }
                marks.push(final_score);

              case 52:
                i++;
                _context2.next = 16;
                break;

              case 55:
                //console.log(marksofevaluator);
                //console.log(marks);
                consta = [];

                for (i = 0; i < marks.length; i++) {
                  thisa = marks[i];
                  sum = 0;

                  for (l = 0; l < thisa.length; l++) {
                    sum = sum + thisa[l];
                  }
                  maarks = {
                    addre: Students[i],
                    sum: sum
                  };

                  consta.push(maarks);
                }
                console.log(consta);
                return _context2.abrupt('return', {
                  consta: consta,
                  marks_final: marks,
                  marks_of_eval: marksofevaluator,
                  Studentscount: Students.length,
                  number: questioncount,
                  address: props.query.address,
                  examineradd: examiner,
                  instructions: inst,
                  Student: Students
                });

              case 59:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Rlc3QvZmluYWxpemUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIkZvcm0iLCJMYXlvdXQiLCJDYW1wYWlnbiIsImZhY3RvcnkiLCJDb250cmlidXRlRm9ybSIsIkVucm9sbEZvcm0iLCJMaW5rIiwiUm91dGVyIiwiQXR0ZW1wdCIsIldhbGxldCIsIkNhbXBhaWduU2hvdyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImV4YW1pbmVyYWRkIiwiaSIsImNvbnN0YSIsImxlbmd0aCIsIm15d2FsbGV0IiwiYWRkcmUiLCJtZXRob2RzIiwic2V0c2NvcmV0ZXN0Iiwic3VtIiwic2VuZCIsImZyb20iLCJtYXJrc19vZl9ldmFsIiwiYWRkciIsIm1hcmsiLCJpdGVtcyIsIm1hcCIsImFkZCIsImRldGFpbHMiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwiY29zbnRhIiwibWFya3NfZmluYWwiLCJTdHVkZW50c2NvdW50IiwibnVtYmVyIiwiYWRkcmVzcyIsImluc3RydWN0aW9ucyIsIlN0dWRlbnQiLCJyZW5kZXJDYXJkcyIsIm5ld3JlbmRlciIsImNhbXBhaWduIiwicXVlcnkiLCJjYWxsIiwiZXhhbWluZXIiLCJudW1iZXJvZlEiLCJxdWVzdGlvbmNvdW50IiwidG90YWxpbnN0cnVjdGlvbiIsImluc3QiLCJTdHVkZW50c0FkZHJlc3MiLCJTdHVkZW50cyIsIm1hcmtzIiwibWFya3NvZmV2YWx1YXRvciIsIm51bWJlcl9vZl9ldmFsdWF0b3IiLCJudW1iZXJvZmV2YWx1dGVyIiwibWFya3NnIiwiaiIsInNlbmRtYXJrcyIsImRldGFpbCIsImJhaXMiLCJtYXJrc2cyIiwibGVuZ3RoYSIsIm0iLCJzZW5kcmVzcG9uc2UiLCJtYXJrc3Byb2IiLCJwYXJzZUludCIsImdoIiwicHVzaCIsImsiLCJmbGFnIiwibmV3c2Nv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LEFBQVEsSUFBUixBQUFZLEdBQUUsSUFBRSxNQUFoQixBQUFzQixRQUF0QixBQUE2QixLQUM3QixBQUNFOzBCQUFNLE1BQU0sTUFBWixBQUFZLEFBQU0sQUFDbkI7QUFDSztBQVB5QjsyQkFRdEIsU0FETSxBQUNOLEFBQVMsQUFDaEI7eUJBVDZCLEFBT2hCLEFBRVIsQUFFUDtBQUplLEFBQ2I7O3lCQUdGLEFBQU8sS0FBUCxBQUFZLEFBRWI7QUFDRDt3QkFBQSxBQUFRLElBQVIsQUFBWTs7MEJBQ0wsQUFDSSxBQUNUOytCQUZLLEFBRVEsQUFDYjtpQ0FISyxBQUdVLEFBQ2Y7aUNBQWUsU0FKVixBQUltQixBQUN4QjswQkFMSyxBQUtHLEFBQ1I7MkJBQVMsTUFBQSxBQUFNLE1BTlYsQUFNZ0IsQUFDckI7K0JBUEssQUFPUSxBQUNiO2dDQVJLLEFBUVMsQUFDZDsyQkFUSyxBQVNLLEE7QUFUTCxBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMUZpQixBLEFBZ0wzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJmaW5hbGl6ZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9qYXlncHQvRGVza3RvcC9Ta2lsbGNvZGUifQ==