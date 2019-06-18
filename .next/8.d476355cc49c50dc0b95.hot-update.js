webpackHotUpdate(8,{

/***/ 1352:
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

var _routes = __webpack_require__(790);

var _Layout = __webpack_require__(1324);

var _Layout2 = _interopRequireDefault(_Layout);

var _Test = __webpack_require__(1342);

var _Test2 = _interopRequireDefault(_Test);

var _web = __webpack_require__(1069);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/jaygpt/Desktop/Skillcode/pages/test/res/personal.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/jaygpt/Desktop/Skillcode/pages/test/res/personal.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/test/res/personal")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5kNDc2MzU1Y2M0OWM1MGRjMGI5NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvdGVzdC9yZXMvcGVyc29uYWwuanM/YWUwZDFlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uICxDYXJkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uLy4uL3JvdXRlcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi8uLi9ldGhlcmV1bS9UZXN0JztcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xuXG5jbGFzcyBSZXNwb25zZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHByb3BzLnF1ZXJ5O1xuICAgIGNvbnN0IHsgYWRkIH0gPSBwcm9wcy5xdWVyeTtcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xuICAgIC8vY29uc3QgU3R1ZGFkZCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuU3R1ZGVudHNBZGRyZXNzKCkuY2FsbCgpO1xuICAgIC8vY29uc3QgY291bnQgPSBTdHVkYWRkLmxlbmd0aDtcbiAgICBjb25zdCBxdWVzdCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMubnVtYmVyb2ZRKCkuY2FsbCgpO1xuICAgIC8vc2VuZHJlc3BvbnNlXG4gICAgY29uc3QgUmVzcG9uc2VzID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIGZvcihpID0gMDsgaTwgcXVlc3Q7IGkrKyl7XG4gICAgICBjb25zdCBkZXRhaWwgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLnNlbmRyZXNwb25zZShwcm9wcy5xdWVyeS5hZGQsIGkpLmNhbGwoKTtcbiAgICAgIGNvbnN0IG15cmVzID0ge1xuICAgICAgICBxdWVzdGlvbjogZGV0YWlsWzBdLFxuICAgICAgICBhbnN3ZXI6IGRldGFpbFsxXVxuICAgICAgfVxuICAgICAgUmVzcG9uc2VzLnB1c2gobXlyZXMpO1xuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKFJlc3BvbnNlcyk7XG4gICAgLy9jb25zb2xlLmxvZyhTdHVkYWRkKTtcbiAgICByZXR1cm4geyBhZGRyZXNzLCBSZXNwb25zZXMsYWRkIH07XG4gIH1cbiAgcmVuZGVyQ2FtcGFpZ25zKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5SZXNwb25zZXMubWFwKGRldGFpbHMgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyOiBkZXRhaWxzLnF1ZXN0aW9uLFxuICAgICAgICBkZXNjcmlwdGlvbjogKFxuICAgICAgICA8cD5cbiAgICAgICAgICB7ZGV0YWlscy5hbnN3ZXJ9XG4gICAgICAgIDwvcD5cbiAgICAgICAgKSxcbiAgICAgICAgZmx1aWQ6IHRydWVcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgzPlJlc3BvbnNlcyBieSB7dGhpcy5wcm9wcy5hZGR9IGZvciB7dGhpcy5wcm9wcy5hZGR9PC9oMz5cbiAgICAgICAgPExpbmsgcm91dGU9e2AvdGVzdC9hdC8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVzcG9uc2VgfT5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIFNob3cgUmVzcG9uc2VcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4yLjEyL3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPExpbmsgcm91dGU9XCIvdGVzdC90ZXN0XCI+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGZsb2F0ZWQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgY29udGVudD1cIlRlc3QgSW5mb1wiXG4gICAgICAgICAgICAgICAgaWNvbj1cImFkZCBjaXJjbGVcIlxuICAgICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAge3RoaXMucmVuZGVyQ2FtcGFpZ25zKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNwb25zZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy90ZXN0L3Jlcy9wZXJzb25hbC5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUFBOztBQUVBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFNQTtBQVJBO0FBVUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBOztBQUZBO0FBSUE7QUFKQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFKQTs7QUFBQTtBQVFBO0FBUkE7QUFDQTs7Ozs7Ozs7OztBQXREQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7QUFFQTs7Ozs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBUEE7Ozs7OztBQVVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=