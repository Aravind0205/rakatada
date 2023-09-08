"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_DonorDay_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/DonorDay.svg */ \"./assets/images/DonorDay.svg\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Login = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleNavigation = ()=>{\n        console.log(\"redirect\");\n        router.push(\"/register\");\n    };\n    const handleLogin = ()=>{\n        const body = {\n            email: email,\n            password: password\n        };\n        const apiUrl = \"http://localhost:5000/rakadata/login\";\n        axios.post(apiUrl, body).then((response)=>{\n            const token = response.data.token;\n            localStorage.setItem(\"token\", token);\n            router.push(\"/lookingForBlood\");\n            console.log(\"Response:\", response.data);\n        }).catch((error)=>{\n            // Handle any errors that occurred during the request.\n            console.error(\"Error:\", error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card card0 border-0\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row d-flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-lg-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card1 pb-5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"row\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: _assets_images_DonorDay_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    width: 450,\n                                    heigth: 450\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/rakatada/pages/login.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/malimpatikavya/Documents/final-project/rakatada/pages/login.js\",\n                                lineNumber: 44,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/malimpatikavya/Documents/final-project/rakatada/pages/login.js\",\n                            lineNumber: 43,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/final-project/rakatada/pages/login.js\",\n                        lineNumber: 42,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-lg-6 mt-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"card2 card border-0 px-4 py-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"row px-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"mb-1\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mb-0 text-sm form-color\",\n                                                children: \"Email Address\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/malimpatikavya/Documents/final-project/rakatada/pages/login.js\",\n                                                lineNumber: 53,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/malimpatikavya/Documents/final-project/rakatada/pages/login.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"mb-4 form-input text-dark\",\n                                            type: \"text\",\n                                            name: \"email\",\n                                            placeholder: \"Enter a valid email address\",\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"/Users/malimpatikavya/Documents/final-project/rakatada/pages/login.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/rakatada/pages/login.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"row px-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"mb-1\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mb-0 text-sm form-color\",\n                                                children: \"Password\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/malimpatikavya/Documents/final-project/rakatada/pages/login.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/malimpatikavya/Documents/final-project/rakatada/pages/login.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            className: \"form-input text-dark\",\n                                            name: \"password\",\n                                            placeholder: \"Enter password\",\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"/Users/malimpatikavya/Documents/final-project/rakatada/pages/login.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/rakatada/pages/login.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"row mb-3 px-3 mt-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"btn btn-blue text-center button-theme\",\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/malimpatikavya/Documents/final-project/rakatada/pages/login.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/rakatada/pages/login.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"row mb-4 px-3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                        className: \"font-weight-bold form-color \",\n                                        children: [\n                                            \"Don't have an account? \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"text-danger\",\n                                                onClick: handleNavigation,\n                                                children: \"Register\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/malimpatikavya/Documents/final-project/rakatada/pages/login.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 104\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/malimpatikavya/Documents/final-project/rakatada/pages/login.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/rakatada/pages/login.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/malimpatikavya/Documents/final-project/rakatada/pages/login.js\",\n                            lineNumber: 50,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/final-project/rakatada/pages/login.js\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/malimpatikavya/Documents/final-project/rakatada/pages/login.js\",\n                lineNumber: 41,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/malimpatikavya/Documents/final-project/rakatada/pages/login.js\",\n            lineNumber: 40,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/malimpatikavya/Documents/final-project/rakatada/pages/login.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Login, \"BTmDKXkQNckAlgI9vYNg4mGcEc8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBc0M7QUFDUDtBQUNxQjtBQUNkO0FBRXRDLE1BQU1LLFFBQVE7O0lBQ1YsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0csT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNRLFVBQVNDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFFeEMsTUFBTVUsbUJBQW1CO1FBQ3JCQyxRQUFRQyxHQUFHLENBQUM7UUFDWlAsT0FBT1EsSUFBSSxDQUFDO0lBQ2hCO0lBRUEsTUFBTUMsY0FBYztRQUNoQixNQUFNQyxPQUFPO1lBQ1RULE9BQU9BO1lBQ1BFLFVBQVVBO1FBQ2Q7UUFDQSxNQUFNUSxTQUFTO1FBRWZDLE1BQU1DLElBQUksQ0FBQ0YsUUFBUUQsTUFDZEksSUFBSSxDQUFDLENBQUNDO1lBQ0gsTUFBTUMsUUFBUUQsU0FBU0UsSUFBSSxDQUFDRCxLQUFLO1lBQ2pDRSxhQUFhQyxPQUFPLENBQUMsU0FBU0g7WUFDOUJoQixPQUFPUSxJQUFJLENBQUM7WUFFWkYsUUFBUUMsR0FBRyxDQUFDLGFBQWFRLFNBQVNFLElBQUk7UUFDMUMsR0FDQ0csS0FBSyxDQUFDLENBQUNDO1lBQ0osc0RBQXNEO1lBQ3REZixRQUFRZSxLQUFLLENBQUMsVUFBVUE7UUFDNUI7SUFDUjtJQUdBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNYLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ1gsNEVBQUMzQixtREFBS0E7b0NBQUM0QixLQUFLM0IsbUVBQVFBO29DQUFFNEIsT0FBTztvQ0FBS0MsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUl0RCw4REFBQ0o7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNJOzRCQUFLSixXQUFVOzs4Q0FDWiw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNYLDhEQUFDSzs0Q0FBTUwsV0FBVTtzREFDYiw0RUFBQ0Q7Z0RBQUlDLFdBQVU7MERBQTBCOzs7Ozs7Ozs7OztzREFFN0MsOERBQUNNOzRDQUFNTixXQUFVOzRDQUE0Qk8sTUFBSzs0Q0FBT0MsTUFBSzs0Q0FDdkRDLGFBQVk7NENBQThCQyxVQUFVOzs7Ozs7Ozs7Ozs7OENBRS9ELDhEQUFDWDtvQ0FBSUMsV0FBVTs7c0RBQ1gsOERBQUNLOzRDQUFNTCxXQUFVO3NEQUNiLDRFQUFDRDtnREFBSUMsV0FBVTswREFBMEI7Ozs7Ozs7Ozs7O3NEQUU3Qyw4REFBQ007NENBQU1DLE1BQUs7NENBQVdQLFdBQVc7NENBQXdCUSxNQUFLOzRDQUN4REMsYUFBWTs0Q0FBaUJDLFVBQVU7Ozs7Ozs7Ozs7Ozs4Q0FFbEQsOERBQUNYO29DQUFJQyxXQUFVOzhDQUNYLDRFQUFDVzt3Q0FBT0osTUFBSzt3Q0FBU1AsV0FBVTtrREFBd0M7Ozs7Ozs7Ozs7OzhDQUU1RSw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQ1gsNEVBQUNZO3dDQUFNWixXQUFVOzs0Q0FBK0I7MERBQXVCLDhEQUFDYTtnREFDcEViLFdBQVU7Z0RBQWNjLFNBQVNoQzswREFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3ZGO0dBekVNTjs7UUFDYUQsa0RBQVNBOzs7S0FEdEJDO0FBMkVOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luLmpzPzgxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IERvbm9yRGF5IGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL0Rvbm9yRGF5LnN2Z1wiXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtwYXNzd29yZCxzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gICAgY29uc3QgaGFuZGxlTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWRpcmVjdFwiKVxuICAgICAgICByb3V0ZXIucHVzaChcIi9yZWdpc3RlclwiKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUxvZ2luID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0ge1xuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBhcGlVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL3Jha2FkYXRhL2xvZ2luJztcblxuICAgICAgICBheGlvcy5wb3N0KGFwaVVybCwgYm9keSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVzcG9uc2UuZGF0YS50b2tlbjtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvbG9va2luZ0ZvckJsb29kXCIpO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlOicsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgYW55IGVycm9ycyB0aGF0IG9jY3VycmVkIGR1cmluZyB0aGUgcmVxdWVzdC5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHB4LTEgcHgtbWQtNSBweC1sZy0xIHB4LXhsLTUgcHktNSBteC1hdXRvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZDAgYm9yZGVyLTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkMSBwYi01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17RG9ub3JEYXl9IHdpZHRoPXs0NTB9IGhlaWd0aD17NDUwfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgbXQtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY2FyZDIgY2FyZCBib3JkZXItMCBweC00IHB5LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTAgdGV4dC1zbSBmb3JtLWNvbG9yXCI+RW1haWwgQWRkcmVzczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibWItNCBmb3JtLWlucHV0IHRleHQtZGFya1wiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXCIgcmVxdWlyZWQ9e3RydWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTAgdGV4dC1zbSBmb3JtLWNvbG9yXCI+UGFzc3dvcmQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT17XCJmb3JtLWlucHV0IHRleHQtZGFya1wifSBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwYXNzd29yZFwiIHJlcXVpcmVkPXt0cnVlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItMyBweC0zIG10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibHVlIHRleHQtY2VudGVyIGJ1dHRvbi10aGVtZVwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItNCBweC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGZvcm0tY29sb3IgXCI+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIiBvbkNsaWNrPXtoYW5kbGVOYXZpZ2F0aW9ufT5SZWdpc3RlcjwvYT48L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJEb25vckRheSIsInVzZVJvdXRlciIsIkxvZ2luIiwicm91dGVyIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVOYXZpZ2F0aW9uIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJoYW5kbGVMb2dpbiIsImJvZHkiLCJhcGlVcmwiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJ0b2tlbiIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiY2F0Y2giLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ3RoIiwiZm9ybSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJidXR0b24iLCJzbWFsbCIsImEiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n"));

/***/ })

});