webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Nav_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav/Nav */ "./components/Nav/Nav.js");
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Profile */ "./components/Profile.js");
/* harmony import */ var generic_Div__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! generic/Div */ "./components/generic/Div.js");
var _jsxFileName = "/home/rostysav/repositories/cleo-next/components/Sidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Sidebar = function Sidebar(_ref) {
  var userProfile = _ref.userProfile,
      handleTheme = _ref.handleTheme,
      theme = _ref.theme;
  return __jsx(generic_Div__WEBPACK_IMPORTED_MODULE_4__["default"], {
    borderRight: "1px solid #fff",
    borderBottom: "1px solid #fff",
    width: 220,
    height: "100%",
    pr: 10,
    pb: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return handleTheme();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, theme ? 'light' : 'dark'), __jsx(_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), userProfile.id && __jsx(_Profile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: userProfile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
};

var mapState = function mapState(state) {
  return {
    userProfile: state.userProfile
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapState)(Sidebar));

/***/ })

})
//# sourceMappingURL=_app.js.4b6ceafb6cf4d69a0e5f.hot-update.js.map