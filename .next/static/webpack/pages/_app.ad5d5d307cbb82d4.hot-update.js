"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/commons/layout/header/LayoutHeader.presenter.tsx":
/*!*************************************************************************!*\
  !*** ./src/components/commons/layout/header/LayoutHeader.presenter.tsx ***!
  \*************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LayoutHeaderUI; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LayoutHeader_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutHeader.styles */ \"./src/components/commons/layout/header/LayoutHeader.styles.ts\");\n\n\nfunction LayoutHeaderUI(props) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LayoutHeader_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LayoutHeader_styles__WEBPACK_IMPORTED_MODULE_1__.InnerWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LayoutHeader_styles__WEBPACK_IMPORTED_MODULE_1__.InnerLogo, {\n                    onClick: props.onClickLogo,\n                    children: \"💎 Home 💎\"\n                }, void 0, false, {\n                    fileName: \"/Users/leeyongsub/Desktop/My-Boards/src/components/commons/layout/header/LayoutHeader.presenter.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LayoutHeader_styles__WEBPACK_IMPORTED_MODULE_1__.InnerButton, {\n                            onClick: props.onClickMoveToLogin,\n                            children: \"로그인\"\n                        }, void 0, false, {\n                            fileName: \"/Users/leeyongsub/Desktop/My-Boards/src/components/commons/layout/header/LayoutHeader.presenter.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LayoutHeader_styles__WEBPACK_IMPORTED_MODULE_1__.InnerButton, {\n                            children: \"회원가입\"\n                        }, void 0, false, {\n                            fileName: \"/Users/leeyongsub/Desktop/My-Boards/src/components/commons/layout/header/LayoutHeader.presenter.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/leeyongsub/Desktop/My-Boards/src/components/commons/layout/header/LayoutHeader.presenter.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/leeyongsub/Desktop/My-Boards/src/components/commons/layout/header/LayoutHeader.presenter.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/leeyongsub/Desktop/My-Boards/src/components/commons/layout/header/LayoutHeader.presenter.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this));\n};\n_c = LayoutHeaderUI;\nvar _c;\n$RefreshReg$(_c, \"LayoutHeaderUI\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb25zL2xheW91dC9oZWFkZXIvTGF5b3V0SGVhZGVyLnByZXNlbnRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFLOEI7QUFHZixRQUFRLENBQUNJLGNBQWMsQ0FBQ0MsS0FBeUIsRUFBZSxDQUFDO0lBQzlFLE1BQU0sNkVBQ0hGLHlEQUFPOzhGQUNMRCw4REFBWTs7NEZBQ1ZELDJEQUFTO29CQUFDSyxPQUFPLEVBQUVELEtBQUssQ0FBQ0UsV0FBVzs4QkFBRSxDQUFROzs7Ozs7NEZBQ3hDQyxDQUFIOztvR0FDRFIsNkRBQVc7NEJBQUNNLE9BQU8sRUFBRUQsS0FBSyxDQUFDSSxrQkFBa0I7c0NBQUUsQ0FBRzs7Ozs7O29HQUM1Q1QsNkRBQUs7c0NBQUMsQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0IsQ0FBQztLQVp1QkksY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb25zL2xheW91dC9oZWFkZXIvTGF5b3V0SGVhZGVyLnByZXNlbnRlci50c3g/ZDAwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbm5lckJ1dHRvbixcbiAgSW5uZXJMb2dvLFxuICBJbm5lcldyYXBwZXIsXG4gIFdyYXBwZXIsXG59IGZyb20gXCIuL0xheW91dEhlYWRlci5zdHlsZXNcIjtcbmltcG9ydCB0eXBlIHsgSUxheW91dEhlYWRlclByb3BzIH0gZnJvbSBcIi4vTGF5b3V0SGVhZGVyLnR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dEhlYWRlclVJKHByb3BzOiBJTGF5b3V0SGVhZGVyUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8SW5uZXJXcmFwcGVyPlxuICAgICAgICA8SW5uZXJMb2dvIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2tMb2dvfT7wn5KOIEhvbWUg8J+SjjwvSW5uZXJMb2dvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxJbm5lckJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrTW92ZVRvTG9naW59PuuhnOq3uOyduDwvSW5uZXJCdXR0b24+XG4gICAgICAgICAgPElubmVyQnV0dG9uPu2ajOybkOqwgOyehTwvSW5uZXJCdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Jbm5lcldyYXBwZXI+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIklubmVyQnV0dG9uIiwiSW5uZXJMb2dvIiwiSW5uZXJXcmFwcGVyIiwiV3JhcHBlciIsIkxheW91dEhlYWRlclVJIiwicHJvcHMiLCJvbkNsaWNrIiwib25DbGlja0xvZ28iLCJkaXYiLCJvbkNsaWNrTW92ZVRvTG9naW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/commons/layout/header/LayoutHeader.presenter.tsx\n");

/***/ })

});