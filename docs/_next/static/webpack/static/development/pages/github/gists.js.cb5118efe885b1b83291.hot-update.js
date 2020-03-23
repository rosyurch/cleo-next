webpackHotUpdate("static/development/pages/github/gists.js",{

/***/ "./views/gists.js":
/*!************************!*\
  !*** ./views/gists.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var components_Gist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Gist */ "./components/Gist.js");
/* harmony import */ var generic_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! generic/Input */ "./components/generic/Input.js");
/* harmony import */ var generic_Div__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! generic/Div */ "./components/generic/Div.js");
/* harmony import */ var generic_Ul__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! generic/Ul */ "./components/generic/Ul.js");
/* harmony import */ var components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Loading */ "./components/Loading.js");
var _jsxFileName = "/home/rostysav/repositories/cleo-next/views/gists.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Gists = function Gists(_ref) {
  var userName = _ref.userName,
      userProfile = _ref.userProfile,
      userGists = _ref.userGists,
      setGists = _ref.setGists,
      defaultProfile = _ref.defaultProfile,
      isLoading = _ref.isLoading,
      setProfile = _ref.setProfile;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      query = _useState[0],
      setQuery = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!userGists.length && userName) {
      setGists(userName);
    } else if (defaultProfile && !userGists.length) {
      setGists(defaultProfile);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // get profile data

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!userName) {
      setProfile(defaultProfile);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  var renderGists = function renderGists(gistList, searchTerm) {
    return searchTerm ? gistList.filter(function (g) {
      return Object.keys(g.files).some(function (fileName) {
        return fileName.toLowerCase().includes(searchTerm);
      });
    }) : gistList;
  };

  return __jsx(generic_Div__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, userGists.length ? __jsx(generic_Div__WEBPACK_IMPORTED_MODULE_4__["default"], {
    textAlign: "center",
    borderBottom: "1px solid #fff",
    py: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(generic_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "text",
    "aria-label": "search",
    mb: 0,
    onChange: function onChange(e) {
      return setQuery(e.target.value.toLowerCase());
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })) : null, isLoading && !userGists.length && __jsx(components_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Loading..."), __jsx(generic_Ul__WEBPACK_IMPORTED_MODULE_5__["default"], {
    display: "flex",
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, renderGists(userGists, query).map(function (g) {
    return __jsx("li", {
      key: g.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx(components_Gist__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: g,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }));
  })));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    userName: state.userProfile.login,
    userProfile: state.userProfile,
    userGists: state.userGists,
    isLoading: state.isLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setGists: dispatch.userGists.getGists,
    setProfile: dispatch.userProfile.getProfile
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Gists));

/***/ })

})
//# sourceMappingURL=gists.js.cb5118efe885b1b83291.hot-update.js.map