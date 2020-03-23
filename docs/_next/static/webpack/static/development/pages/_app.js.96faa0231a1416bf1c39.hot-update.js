webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./models/followers.js":
/*!*****************************!*\
  !*** ./models/followers.js ***!
  \*****************************/
/*! exports provided: userFollowers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userFollowers", function() { return userFollowers; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);

var userFollowers = {
  state: [],
  reducers: {
    setFollowers: function setFollowers(state, payload) {
      return payload;
    },
    clearFollowers: function clearFollowers() {
      return [];
    }
  },
  effects: function effects(dispatch) {
    return {
      getFollowers: function getFollowers(payload) {
        var responce, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getFollowers$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch.isLoading.setIsLoading(true);
                _context.next = 3;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://api.github.com/users/".concat(payload, "/followers")));

              case 3:
                responce = _context.sent;
                _context.next = 6;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(responce.json());

              case 6:
                data = _context.sent;
                dispatch.isLoading.setIsLoading(false);
                dispatch.userFollowers.setFollowers(data);

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
//# sourceMappingURL=_app.js.96faa0231a1416bf1c39.hot-update.js.map