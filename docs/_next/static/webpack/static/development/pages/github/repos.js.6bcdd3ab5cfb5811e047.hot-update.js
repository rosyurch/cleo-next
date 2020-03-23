webpackHotUpdate("static/development/pages/github/repos.js",{

/***/ "./views/repos.js":
/*!************************!*\
  !*** ./views/repos.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var components_Repo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Repo */ "./components/Repo.js");
/* harmony import */ var generic_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! generic/Input */ "./components/generic/Input.js");
/* harmony import */ var generic_Ul__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! generic/Ul */ "./components/generic/Ul.js");
/* harmony import */ var generic_Flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! generic/Flex */ "./components/generic/Flex.js");
/* harmony import */ var components_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Loading */ "./components/Loading.js");
/* harmony import */ var generic_Div__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! generic/Div */ "./components/generic/Div.js");

var _jsxFileName = "/home/rostysav/repositories/cleo-next/views/repos.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var Repos = function Repos(_ref) {
  var userName = _ref.userName,
      userRepos = _ref.userRepos,
      setUserRepos = _ref.setUserRepos,
      defaultProfile = _ref.defaultProfile,
      isLoading = _ref.isLoading,
      setProfile = _ref.setProfile;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      sortByStars = _useState[0],
      setSortByStars = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      query = _useState2[0],
      setQuery = _useState2[1]; // get repositories


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!userRepos.length && userName) {
      setUserRepos(userName);
    } else if (defaultProfile && !userRepos.length) {
      setUserRepos(defaultProfile);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // get profile data

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!userName) {
      setProfile(defaultProfile);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  var sortedList = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(userRepos).sort(function (a, b) {
      return b.stargazers_count - a.stargazers_count;
    });
  }, [userRepos]);

  var renderRepos = function renderRepos(reposList, searchTerm) {
    return searchTerm ? reposList.filter(function (r) {
      return r.name.toLowerCase().includes(searchTerm) || r.description && r.description.toLowerCase().includes(searchTerm) || r.language && r.language.toLowerCase().includes(searchTerm);
    }) : reposList;
  };

  return __jsx(generic_Div__WEBPACK_IMPORTED_MODULE_8__["default"], {
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, userRepos.length ? __jsx(generic_Flex__WEBPACK_IMPORTED_MODULE_6__["default"], {
    py: 20,
    flexDirection: "column",
    alignItems: "center",
    borderBottom: "1px solid #fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(generic_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "text",
    "aria-label": "search",
    onChange: function onChange(e) {
      return setQuery(e.target.value.toLowerCase());
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Sort by stars:", __jsx("input", {
    type: "checkbox",
    onChange: function onChange() {
      return setSortByStars(function (s) {
        return !s;
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }))) : null, isLoading && !userRepos.length && __jsx(components_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Loading..."), __jsx(generic_Ul__WEBPACK_IMPORTED_MODULE_5__["default"], {
    display: "flex",
    flexWrap: "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, renderRepos(sortByStars ? sortedList : userRepos, query).map(function (r) {
    return __jsx("li", {
      key: r.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx(components_Repo__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: r,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }));
  })));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    userName: state.userProfile.login,
    userRepos: state.userRepos,
    isLoading: state.isLoading,
    userProfile: state.userProfile
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setUserRepos: dispatch.userRepos.getRepos,
    setProfile: dispatch.userProfile.getProfile
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Repos));

/***/ })

})
//# sourceMappingURL=repos.js.6bcdd3ab5cfb5811e047.hot-update.js.map