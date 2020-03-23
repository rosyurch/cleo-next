webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./models/gists.js":
/*!*************************!*\
  !*** ./models/gists.js ***!
  \*************************/
/*! exports provided: userGists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userGists", function() { return userGists; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);

var userGists = {
  state: [],
  reducers: {
    setGists: function setGists(state, payload) {
      return payload;
    },
    clearGists: function clearGists() {
      return [];
    }
  },
  effects: function effects(dispatch) {
    return {
      getGists: function getGists(payload) {
        var responce, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getGists$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch.isLoading.setIsLoading(true);
                _context.next = 3;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://api.github.com/users/".concat(payload, "/gists")));

              case 3:
                responce = _context.sent;
                _context.next = 6;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(responce.json());

              case 6:
                data = _context.sent;
                dispatch.isLoading.setIsLoading(false);
                dispatch.userGists.setGists(data);

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
//# sourceMappingURL=_app.js.98424c6f7982302196b7.hot-update.js.map