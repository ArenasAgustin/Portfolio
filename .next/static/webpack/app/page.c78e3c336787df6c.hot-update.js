"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/About/About.jsx":
/*!****************************************!*\
  !*** ./app/components/About/About.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _assets_profile_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/profile.webp */ \"(app-pages-browser)/./app/assets/profile.webp\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ \"(app-pages-browser)/./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos/dist/aos.css */ \"(app-pages-browser)/./node_modules/aos/dist/aos.css\");\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button/Button */ \"(app-pages-browser)/./app/components/Button/Button.jsx\");\n/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Loader/Loader */ \"(app-pages-browser)/./app/components/Loader/Loader.jsx\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ \"(app-pages-browser)/./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n// import Cv from \"../../assets/CV - Agustin Arenas - Full Stack Web Developer.pdf\";\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst renderLoader = function() /*#__PURE__*/ {\n    let isDark = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        isDark: isDark\n    }, void 0, false, {\n        fileName: \"D:\\\\Programacion\\\\JavaScript_HTML_CSS\\\\MisPaginasWebs\\\\portfolio\\\\app\\\\components\\\\About\\\\About.jsx\",\n        lineNumber: 11,\n        columnNumber: 42\n    }, _this);\n};\nfunction About(param) {\n    let { isDark = false } = param;\n    _s();\n    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)(\"global\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        aos__WEBPACK_IMPORTED_MODULE_3___default().init({\n            duration: 1500\n        });\n        return ()=>{\n            aos__WEBPACK_IMPORTED_MODULE_3___default().refresh();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"about \".concat(isDark ? \"about--dark\" : \"\"),\n        id: \"about\",\n        \"data-aos\": \"fade-up\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"about__title \".concat(isDark ? \"about__title--dark\" : \"\"),\n                \"data-aos\": \"flip-left\",\n                children: t(\"about.title\")\n            }, void 0, false, {\n                fileName: \"D:\\\\Programacion\\\\JavaScript_HTML_CSS\\\\MisPaginasWebs\\\\portfolio\\\\app\\\\components\\\\About\\\\About.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"about__container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"about__container-image\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"picture\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {\n                                fallback: renderLoader(isDark),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                    className: \"about__container-img\",\n                                    src: _assets_profile_webp__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                                    alt: \"profile\",\n                                    loading: \"lazy\",\n                                    width: \"100%\",\n                                    height: \"100%\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programacion\\\\JavaScript_HTML_CSS\\\\MisPaginasWebs\\\\portfolio\\\\app\\\\components\\\\About\\\\About.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programacion\\\\JavaScript_HTML_CSS\\\\MisPaginasWebs\\\\portfolio\\\\app\\\\components\\\\About\\\\About.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programacion\\\\JavaScript_HTML_CSS\\\\MisPaginasWebs\\\\portfolio\\\\app\\\\components\\\\About\\\\About.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Programacion\\\\JavaScript_HTML_CSS\\\\MisPaginasWebs\\\\portfolio\\\\app\\\\components\\\\About\\\\About.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"about__container-card\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"about-txt\",\n                                children: t(\"about.description1\")\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programacion\\\\JavaScript_HTML_CSS\\\\MisPaginasWebs\\\\portfolio\\\\app\\\\components\\\\About\\\\About.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"about__container-txt\",\n                                children: t(\"about.description2\")\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programacion\\\\JavaScript_HTML_CSS\\\\MisPaginasWebs\\\\portfolio\\\\app\\\\components\\\\About\\\\About.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Programacion\\\\JavaScript_HTML_CSS\\\\MisPaginasWebs\\\\portfolio\\\\app\\\\components\\\\About\\\\About.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Programacion\\\\JavaScript_HTML_CSS\\\\MisPaginasWebs\\\\portfolio\\\\app\\\\components\\\\About\\\\About.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Programacion\\\\JavaScript_HTML_CSS\\\\MisPaginasWebs\\\\portfolio\\\\app\\\\components\\\\About\\\\About.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(About, \"yIHkV3cUFHCxFeD16vLIxDL2JDQ=\", false, function() {\n    return [\n        react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation\n    ];\n});\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0Fib3V0L0Fib3V0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0ZBQW9GOzs7O0FBQ3BDO0FBQ0o7QUFDdEI7QUFDSTtBQUNZO0FBQ0E7QUFDUztBQUNoQjtBQUUvQixNQUFNUSxlQUFlO1FBQUNDLDBFQUFTO1dBQVUsOERBQUNKLHNEQUFNQTtRQUFDSSxRQUFRQTs7Ozs7O0FBQVM7QUFFbkQsU0FBU0MsTUFBTSxLQUFrQjtRQUFsQixFQUFFRCxTQUFTLEtBQUssRUFBRSxHQUFsQjs7SUFDNUIsTUFBTSxFQUFFRSxDQUFDLEVBQUUsR0FBR0wsNkRBQWNBLENBQUM7SUFFN0JKLGdEQUFTQSxDQUFDO1FBQ1JDLCtDQUFRLENBQUM7WUFBRVUsVUFBVTtRQUFLO1FBRTFCLE9BQU87WUFDTFYsa0RBQVc7UUFDYjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDWTtRQUNDQyxXQUFXLFNBQXFDLE9BQTVCUCxTQUFTLGdCQUFnQjtRQUM3Q1EsSUFBRztRQUNIQyxZQUFTOzswQkFFVCw4REFBQ0M7Z0JBQ0NILFdBQVcsZ0JBQW1ELE9BQW5DUCxTQUFTLHVCQUF1QjtnQkFDM0RTLFlBQVM7MEJBRVJQLEVBQUU7Ozs7OzswQkFHTCw4REFBQ0k7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0k7c0NBQ0MsNEVBQUNuQiwyQ0FBUUE7Z0NBQUNvQixVQUFVYixhQUFhQzswQ0FDL0IsNEVBQUNGLG1EQUFLQTtvQ0FDSlMsV0FBVTtvQ0FDVk0sS0FBS3RCLDREQUFPQTtvQ0FDWnVCLEtBQUk7b0NBQ0pDLFNBQVE7b0NBQ1JDLE9BQU07b0NBQ05DLFFBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNZiw4REFBQ1g7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDVztnQ0FBRVgsV0FBVTswQ0FBYUwsRUFBRTs7Ozs7OzBDQUM1Qiw4REFBQ2dCO2dDQUFFWCxXQUFVOzBDQUF3QkwsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYWpEO0dBdkR3QkQ7O1FBQ1JKLHlEQUFjQTs7O0tBRE5JIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0Fib3V0L0Fib3V0LmpzeD9kMWIwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBDdiBmcm9tIFwiLi4vLi4vYXNzZXRzL0NWIC0gQWd1c3RpbiBBcmVuYXMgLSBGdWxsIFN0YWNrIFdlYiBEZXZlbG9wZXIucGRmXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi8uLi9hc3NldHMvcHJvZmlsZS53ZWJwXCI7XHJcbmltcG9ydCB7IFN1c3BlbnNlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFvcyBmcm9tIFwiYW9zXCI7XHJcbmltcG9ydCBcImFvcy9kaXN0L2Fvcy5jc3NcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vQnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9Mb2FkZXIvTG9hZGVyXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5jb25zdCByZW5kZXJMb2FkZXIgPSAoaXNEYXJrID0gZmFsc2UpID0+IDxMb2FkZXIgaXNEYXJrPXtpc0Rhcmt9IC8+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoeyBpc0RhcmsgPSBmYWxzZSB9KSB7XHJcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbihcImdsb2JhbFwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIEFvcy5pbml0KHsgZHVyYXRpb246IDE1MDAgfSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgQW9zLnJlZnJlc2goKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2BhYm91dCAke2lzRGFyayA/IFwiYWJvdXQtLWRhcmtcIiA6IFwiXCJ9YH1cclxuICAgICAgaWQ9XCJhYm91dFwiXHJcbiAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICA+XHJcbiAgICAgIDxoMlxyXG4gICAgICAgIGNsYXNzTmFtZT17YGFib3V0X190aXRsZSAke2lzRGFyayA/IFwiYWJvdXRfX3RpdGxlLS1kYXJrXCIgOiBcIlwifWB9XHJcbiAgICAgICAgZGF0YS1hb3M9XCJmbGlwLWxlZnRcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3QoXCJhYm91dC50aXRsZVwiKX1cclxuICAgICAgPC9oMj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfX2NvbnRhaW5lci1pbWFnZVwiPlxyXG4gICAgICAgICAgPHBpY3R1cmU+XHJcbiAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17cmVuZGVyTG9hZGVyKGlzRGFyayl9PlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJvdXRfX2NvbnRhaW5lci1pbWdcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtQcm9maWxlfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwicHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9TdXNwZW5zZT5cclxuICAgICAgICAgIDwvcGljdHVyZT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dF9fY29udGFpbmVyLWNhcmRcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFib3V0LXR4dFwiPnt0KFwiYWJvdXQuZGVzY3JpcHRpb24xXCIpfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFib3V0X19jb250YWluZXItdHh0XCI+e3QoXCJhYm91dC5kZXNjcmlwdGlvbjJcIil9PC9wPlxyXG5cclxuICAgICAgICAgIHsvKiA8QnV0dG9uXHJcbiAgICAgICAgICAgIGRvd25sb2FkPXt0cnVlfVxyXG4gICAgICAgICAgICBocmVmPXtDdn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuX19saW5rLS1jdiAke2lzRGFyayA/IFwiYnRuX19saW5rLS1jdi1kYXJrXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgIHR4dD17dChcImFib3V0LmJ0blwiKX1cclxuICAgICAgICAgICAgaXNEYXJrPXtpc0Rhcmt9XHJcbiAgICAgICAgICAvPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJQcm9maWxlIiwiU3VzcGVuc2UiLCJ1c2VFZmZlY3QiLCJBb3MiLCJCdXR0b24iLCJMb2FkZXIiLCJ1c2VUcmFuc2xhdGlvbiIsIkltYWdlIiwicmVuZGVyTG9hZGVyIiwiaXNEYXJrIiwiQWJvdXQiLCJ0IiwiaW5pdCIsImR1cmF0aW9uIiwicmVmcmVzaCIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiZGF0YS1hb3MiLCJoMiIsInBpY3R1cmUiLCJmYWxsYmFjayIsInNyYyIsImFsdCIsImxvYWRpbmciLCJ3aWR0aCIsImhlaWdodCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/About/About.jsx\n"));

/***/ })

});