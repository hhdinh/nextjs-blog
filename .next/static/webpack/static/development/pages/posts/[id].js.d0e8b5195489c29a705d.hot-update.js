webpackHotUpdate("static\\development\\pages\\posts\\[id].js",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: siteTitle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteTitle", function() { return siteTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Haru\\Desktop\\Woz-U\\DemoApps\\nextjs-blog\\components\\layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var name = 'Hoa';
var siteTitle = 'Next.js Sample Website';
function Layout(_ref) {
  var children = _ref.children,
      home = _ref.home;
  return __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "description",
    content: "Learn how to build a personal website using Next.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "https://og-image.now.sh/".concat(encodeURI(siteTitle), ".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "og:title",
    content: siteTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  })), __jsx("header", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, home ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
    src: "/images/profile.jpg",
    className: "".concat(_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.headerHomeImage, " ").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.borderCircle),
    alt: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }), __jsx("h1", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.heading2Xl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, name)) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "/images/profile.jpg",
    className: "".concat(_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.headerImage, " ").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.borderCircle),
    alt: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 37
    }
  }))), __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingLg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 33
    }
  }, __jsx("a", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.colorInherit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 37
    }
  }, name))))), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, children), !home && __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.backToHome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, "\u2190 Back to home"))));
}

/***/ })

})
//# sourceMappingURL=[id].js.d0e8b5195489c29a705d.hot-update.js.map