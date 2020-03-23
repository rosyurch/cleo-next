webpackHotUpdate("static/development/pages/index.js",{

/***/ "./views/index.js":
/*!************************!*\
  !*** ./views/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var generic_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! generic/Form */ "./components/generic/Form.js");
/* harmony import */ var generic_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! generic/Input */ "./components/generic/Input.js");
/* harmony import */ var generic_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! generic/Button */ "./components/generic/Button.js");
/* harmony import */ var components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Loading */ "./components/Loading.js");
/* harmony import */ var generic_Div__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! generic/Div */ "./components/generic/Div.js");
var _jsxFileName = "/home/rostysav/repositories/cleo-next/views/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Index = function Index(_ref) {
  var setProfile = _ref.setProfile,
      userProfile = _ref.userProfile,
      defaultProfile = _ref.defaultProfile,
      isLoading = _ref.isLoading,
      clearRepos = _ref.clearRepos,
      clearGists = _ref.clearGists,
      clearFollowers = _ref.clearFollowers;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(userProfile.login || defaultProfile),
      searchName = _useState2[0],
      setSearchName = _useState2[1]; // keep current user when navigating back to this page


  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setSearchName(name);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (searchName) {
      clearRepos();
      clearGists();
      clearFollowers();
      setProfile(searchName);

      if (!localStorage.getItem('defaultProfile')) {
        localStorage.setItem('defaultProfile', searchName);
      }
    }
  }, [searchName]); // eslint-disable-line react-hooks/exhaustive-deps

  var userNotFound = userProfile.message === 'Not Found'; // const x = 5
  // x = 3 // triggers error

  return __jsx(generic_Div__WEBPACK_IMPORTED_MODULE_6__["default"], {
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(generic_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(generic_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "text",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx(generic_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "submit",
    border: "none",
    borderLeft: "1px solid #000",
    p: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Get")), isLoading && !userProfile.id && __jsx(components_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Loading..."), userNotFound && __jsx(generic_Div__WEBPACK_IMPORTED_MODULE_6__["default"], {
    textAlign: "center",
    color: "coral",
    fontSize: "1.5em",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Couldn't find anybody"));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    userProfile: state.userProfile,
    isLoading: state.isLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setProfile: dispatch.userProfile.getProfile,
    clearRepos: dispatch.userRepos.clearRepos,
    clearGists: dispatch.userGists.clearGists,
    clearFollowers: dispatch.userFollowers.clearFollowers
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Index));

/***/ })

})
//# sourceMappingURL=index.js.5520ee4f5853e900d65a.hot-update.js.map