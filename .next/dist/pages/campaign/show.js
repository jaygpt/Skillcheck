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

var _wallet = require('../../ethereum/wallet');

var _wallet2 = _interopRequireDefault(_wallet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jaygpt/Desktop/Skillcode/pages/campaign/show.js?entry';


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
          add = _props.add,
          myscore = _props.myscore;

      var items = [{
        header: myscore,
        meta: 'Address of Manager',
        description: 'Score of your Skill in Programming',
        style: { overflowWrap: 'break-word' }
      }, {
        header: add,
        meta: 'My account addresss',
        description: 'My account address',
        style: { overflowWrap: 'break-word' }
      }, {
        header: 20,
        meta: 'Address of Manager',
        description: 'Score of your Skill in Evaluation of test in Programming',
        style: { overflowWrap: 'break-word' }
      }];

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
          lineNumber: 53
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Wallet Show'), this.renderCards(), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, score, myadd;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(props.query.address);
                campaign = (0, _wallet2.default)(props.query.address);
                _context.next = 4;
                return campaign.methods.presentscore().call();

              case 4:
                score = _context.sent;
                _context.next = 7;
                return campaign.methods.myaddress().call();

              case 7:
                myadd = _context.sent;

                console.log(score);
                return _context.abrupt('return', {
                  add: myadd,
                  myscore: score
                });

              case 10:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWduL3Nob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiTGF5b3V0IiwiV2FsbGV0IiwiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJhZGQiLCJteXNjb3JlIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInJlbmRlckNhcmRzIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiYWRkcmVzcyIsImNhbXBhaWduIiwibWV0aG9kcyIsInByZXNlbnRzY29yZSIsImNhbGwiLCJzY29yZSIsIm15YWRkcmVzcyIsIm15YWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBRVQsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7Ozs7Ozs7O0ksQUFFYjs7Ozs7Ozs7Ozs7a0NBWVk7bUJBSU4sS0FKTSxBQUlEO1VBSkMsQUFFUixhQUZRLEFBRVI7VUFGUSxBQUdSLGlCQUhRLEFBR1IsQUFHRjs7VUFBTTtnQkFDSixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFJSSxBQUNGO2VBQU8sRUFBRSxjQU5DLEFBQ1osQUFLUyxBQUFnQjtBQUx6QixBQUNFLE9BRlU7Z0JBUVosQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQUhGLEFBSUksQUFDRjtlQUFPLEVBQUUsY0FiQyxBQVFaLEFBS1MsQUFBZ0I7QUFMekIsQUFDRTtnQkFNRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFJSSxBQUNGO2VBQU8sRUFBRSxjQXBCYixBQUFjLEFBZVosQUFLUyxBQUFnQixBQUkzQjtBQVRFLEFBQ0U7OzJDQVFHLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBRUYsQUFDTDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQyxxQkFGSCxBQUVHLEFBQUssQUFDTjs7b0JBQUE7c0JBSkosQUFDRSxBQUdFLEFBR0w7QUFISztBQUFBOzs7OzsyR0FoRHFCLEE7Ozs7O21CQUN6Qjt3QkFBQSxBQUFRLElBQUksTUFBQSxBQUFNLE1BQWxCLEFBQXdCLEFBQ2xCO0EsMkJBQVcsc0JBQU8sTUFBQSxBQUFNLE1BQWIsQSxBQUFtQjs7dUJBQ2hCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGVBQWpCLEFBQWdDLEE7O21CQUE5QztBOzt1QkFDYyxTQUFBLEFBQVMsUUFBVCxBQUFpQixZQUFqQixBQUE2QixBOzttQkFBM0M7QSxpQ0FDTjs7d0JBQUEsQUFBUSxJQUFSLEFBQVk7O3VCQUNMLEFBQ0EsQUFDTDsyQkFGSyxBQUVJLEE7QUFGSixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUmlCLEEsQUF1RDNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvamF5Z3B0L0Rlc2t0b3AvU2tpbGxjb2RlIn0=