webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./models/repos.js":
/*!*************************!*\
  !*** ./models/repos.js ***!
  \*************************/
/*! exports provided: userRepos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRepos", function() { return userRepos; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);

var userRepos = {
  state: [],
  reducers: {
    setRepos: function setRepos(state, payload) {
      return payload;
    },
    clearRepos: function clearRepos() {
      return [];
    }
  },
  effects: function effects(dispatch) {
    return {
      getRepos: function getRepos(payload) {
        var responce, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getRepos$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch.isLoading.setIsLoading(true);
                _context.next = 3;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://api.github.com/users/".concat(payload, "/repos")));

              case 3:
                responce = _context.sent;
                _context.next = 6;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(responce.json());

              case 6:
                data = _context.sent;
                dispatch.isLoading.setIsLoading(false);
                dispatch.userRepos.setRepos(data);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, null, null, null, Promise);
      }
    };
  }
};

/***/ })

})
//# sourceMappingURL=_app.js.f63e4cd4eea35e451aea.hot-update.js.map