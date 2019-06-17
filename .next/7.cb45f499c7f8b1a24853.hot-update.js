webpackHotUpdate(7,{

/***/ 1344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(504);

var _Layout = __webpack_require__(1324);

var _Layout2 = _interopRequireDefault(_Layout);

var _Test = __webpack_require__(1342);

var _Test2 = _interopRequireDefault(_Test);

var _factory = __webpack_require__(1340);

var _factory2 = _interopRequireDefault(_factory);

var _answer = __webpack_require__(1346);

var _answer2 = _interopRequireDefault(_answer);

var _routes = __webpack_require__(790);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/jaygpt/Desktop/Skillcode/pages/test/show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/jaygpt/Desktop/Skillcode/pages/test/show.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/test/show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5jYjQ1ZjQ5OWM3ZjhiMWEyNDg1My5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvdGVzdC9zaG93LmpzPzM1YTZhNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIEdyaWQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi9ldGhlcmV1bS9UZXN0JztcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uLy4uL2V0aGVyZXVtL2ZhY3RvcnkyJztcbmltcG9ydCBDb250cmlidXRlRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Fuc3dlcic7XG5pbXBvcnQgeyBMaW5rLCBSb3V0ZXIgfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xuXG5jbGFzcyBDYW1wYWlnblNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2cocHJvcHMucXVlcnkuYWRkcmVzcyk7XG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMucXVlcnkuYWRkcmVzcyk7XG4gICAgICAgIGNvbnN0IGV4YW1pbmVyID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5leGFtaW5lcmFkZCgpLmNhbGwoKTtcbiAgICAgICAgY29uc3QgcXVlc3Rpb25jb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMubnVtYmVyb2ZRKCkuY2FsbCgpO1xuICAgICAgICBjb25zdCBpbnN0ID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLnRvdGFsaW5zdHJ1Y3Rpb24ocHJvcHMucXVlcnkuYWRkcmVzcykuY2FsbCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9wcy5xdWVyeS5hZGRyZXNzKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBudW1iZXI6IHF1ZXN0aW9uY291bnQsXG4gICAgICAgICAgYWRkcmVzczogcHJvcHMucXVlcnkuYWRkcmVzcyxcbiAgICAgICAgICBleGFtaW5lcmFkZDogZXhhbWluZXIsXG4gICAgICAgICAgaW5zdHJ1Y3Rpb25zOiBpbnN0XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBcbiAgICAgIHJlbmRlckNhcmRzKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgbnVtYmVyLFxuICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgZXhhbWluZXJhZGQsXG4gICAgICAgICAgaW5zdHJ1Y3Rpb25zXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcjogZXhhbWluZXJhZGQsXG4gICAgICAgICAgICBtZXRhOiAnQWRkcmVzcyBvZiBFeGFtaW5lcicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjooXG4gICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL3Rlc3QvYXQvJHthZGRyZXNzfS9hZGRuZXdgfT5cbiAgICAgICAgICAgICAgICA8YT4nRXhhbWluZXIgaGF2ZSByaWdodCB0byAgYWNjZXNzIHlvdXIgdGVzdC1zY29yZSc8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcjogXCJJbnN0cnVjdGlvblwiLFxuICAgICAgICAgICAgbWV0YTogJ1JlYWQgaW5zdHJ1Y3Rpb24gY2FyZWZ1bHknLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgIGluc3RydWN0aW9ucyxcbiAgICAgICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcjogbnVtYmVyLFxuICAgICAgICAgICAgbWV0YTogJ1RvdGFsIE51bWJlciBvZiBRdWVzdGlvbicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgJ0FsbCBhcmUgY29tcHVsc29yeSB0byBhbnN3ZXInLFxuICAgICAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcgfVxuICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcbiAgICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8aDM+VGhpcyBUZXN0PC9oMz5cbiAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTB9Pnt0aGlzLnJlbmRlckNhcmRzKCl9PC9HcmlkLkNvbHVtbj5cbiAgXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezZ9PlxuICAgICAgICAgICAgICA8Q29udHJpYnV0ZUZvcm0gYWRkcmVzcyA9IHt0aGlzLnByb3BzLmFkZHJlc3N9Lz5cblxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApO1xuICAgICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnblNob3c7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvdGVzdC9zaG93LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBTUE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBUEE7QUFXQTtBQUNBO0FBRUE7QUFBQTtBQUpBO0FBUUE7QUFDQTtBQUVBO0FBQUE7QUFKQTtBQUNBO0FBT0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQUdBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFNQTtBQU5BOzs7Ozs7Ozs7OztBQTVEQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUdBO0FBQUE7QUFFQTs7QUFIQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTREQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9