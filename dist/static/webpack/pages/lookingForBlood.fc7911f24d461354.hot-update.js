"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/lookingForBlood",{

/***/ "./pages/lookingForBlood.js":
/*!**********************************!*\
  !*** ./pages/lookingForBlood.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst LookingForBlood = ()=>{\n    var _stateData;\n    _s();\n    const [selectedState, setSelectedState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedDistrict, setSelectedDistrict] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedBloodGroup, setSelectedBloodGroup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedBloodComponent, setSelectedBloodComponent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isDistrictEnabled, setIsDistrictEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [stateData, setStateData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const handleStateChange = (event)=>{\n        const newState = event.target.value;\n        setSelectedState(newState);\n        setIsDistrictEnabled(newState !== \"\");\n    };\n    const handleDistrictChange = (event)=>{\n        const newDistrict = event.target.value;\n        setSelectedDistrict(newDistrict);\n    };\n    const handleBloodGroupChange = (event)=>{\n        const newBloodGroup = event.target.value;\n        setSelectedBloodGroup(newBloodGroup);\n    };\n    const handleBloodComponentChange = (event)=>{\n        const newBloodComponent = event.target.value;\n        setSelectedBloodComponent(newBloodComponent);\n    };\n    const handleSearch = ()=>{\n        if (!selectedState) {\n            alert(\"State is required.\");\n            return;\n        }\n        if (!selectedDistrict) {\n            alert(\"District is required.\");\n            return;\n        }\n        if (!selectedBloodGroup) {\n            alert(\"Blood Group is required.\");\n            return;\n        }\n        if (!selectedBloodComponent) {\n            alert(\"Blood Component is required.\");\n            return;\n        }\n        console.log(\"State:\", selectedState);\n        console.log(\"District:\", selectedDistrict);\n        console.log(\"Blood Group:\", selectedBloodGroup);\n        console.log(\"Blood Component:\", selectedBloodComponent);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:5000/rakadata/states\").then((response)=>setStateData(response)).catch((e)=>console.log(e));\n    }, []);\n    console.log(stateData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mt-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Blood Stock Availability\"\n            }, void 0, false, {\n                fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, undefined),\n            stateData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            className: \"form-select form-select-md mb-3\",\n                            \"aria-label\": \".form-select-lg example\",\n                            onChange: handleStateChange,\n                            value: selectedState,\n                            required: true,\n                            children: (_stateData = stateData) === null || _stateData === void 0 ? void 0 : _stateData.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: item,\n                                    children: item\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 29\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            className: \"form-select form-select-md mb-3\",\n                            \"aria-label\": \".form-select-lg example\",\n                            onChange: handleDistrictChange,\n                            value: selectedDistrict,\n                            disabled: !isDistrictEnabled,\n                            required: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"\",\n                                    children: \"Select District\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"1\",\n                                    children: \"One\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"2\",\n                                    children: \"Two\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"3\",\n                                    children: \"Three\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                            lineNumber: 86,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            className: \"form-select form-select-md mb-3\",\n                            \"aria-label\": \".form-select-lg example\",\n                            onChange: handleBloodGroupChange,\n                            value: selectedBloodGroup,\n                            required: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    defaultValue: \"\",\n                                    children: \"Select Blood Group\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"A%2B\",\n                                    children: \"A+\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"A%2D\",\n                                    children: \"A-\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"B%2B\",\n                                    children: \"B+\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"B%2D\",\n                                    children: \"B-\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"AB%2B\",\n                                    children: \"AB+\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"AB%2D\",\n                                    children: \"AB-\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"O%2B\",\n                                    children: \"O+\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"O%2D\",\n                                    children: \"O-\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                            lineNumber: 101,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            className: \"form-select form-select-md mb-3\",\n                            \"aria-label\": \".form-select-lg example\",\n                            onChange: handleBloodComponentChange,\n                            value: selectedBloodComponent,\n                            required: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    defaultValue: \"\",\n                                    children: \"Select Blood Component\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                                    lineNumber: 127,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Whole Blood\",\n                                    children: \"Whole Blood\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                                    lineNumber: 128,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \">Single Donor Platelet\",\n                                    children: \"Single Donor Platelet\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                                    lineNumber: 129,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Single Donor Plasma\",\n                                    children: \"Single Donor Plasma\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                                    lineNumber: 130,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Plasma\",\n                                    children: \"Plasma\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                                    lineNumber: 131,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"Platelets\",\n                                    children: \"Platelets\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                                    lineNumber: 132,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                            lineNumber: 120,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                        lineNumber: 119,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-2 mt-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"button-theme py-2 px-5\",\n                            onClick: handleSearch,\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                            lineNumber: 136,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                        lineNumber: 135,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/malimpatikavya/Documents/final-project/Client/pages/lookingForBlood.js\",\n        lineNumber: 64,\n        columnNumber: 13\n    }, undefined);\n};\n_s(LookingForBlood, \"4YGJHnNeZYUoFDMmdw8DdwYwLk8=\");\n_c = LookingForBlood;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LookingForBlood);\nvar _c;\n$RefreshReg$(_c, \"LookingForBlood\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPVixXQUFVOzRCQUF5QlcsU0FBU3JCO3NDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10RjtHQTFJTXpCO0tBQUFBO0FBNElOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvb2tpbmdGb3JCbG9vZC5qcz81MzAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgTG9va2luZ0ZvckJsb29kID0gKCkgPT4ge1xuICAgIGNvbnN0IFtzZWxlY3RlZFN0YXRlLCBzZXRTZWxlY3RlZFN0YXRlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0ZWREaXN0cmljdCwgc2V0U2VsZWN0ZWREaXN0cmljdF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdGVkQmxvb2RHcm91cCwgc2V0U2VsZWN0ZWRCbG9vZEdyb3VwXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0ZWRCbG9vZENvbXBvbmVudCwgc2V0U2VsZWN0ZWRCbG9vZENvbXBvbmVudF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2lzRGlzdHJpY3RFbmFibGVkLCBzZXRJc0Rpc3RyaWN0RW5hYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3N0YXRlRGF0YSwgc2V0U3RhdGVEYXRhXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcblxuICAgIGNvbnN0IGhhbmRsZVN0YXRlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBzZXRTZWxlY3RlZFN0YXRlKG5ld1N0YXRlKTtcbiAgICAgICAgc2V0SXNEaXN0cmljdEVuYWJsZWQobmV3U3RhdGUgIT09ICcnKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRGlzdHJpY3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RGlzdHJpY3QgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIHNldFNlbGVjdGVkRGlzdHJpY3QobmV3RGlzdHJpY3QpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVCbG9vZEdyb3VwQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0Jsb29kR3JvdXAgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIHNldFNlbGVjdGVkQmxvb2RHcm91cChuZXdCbG9vZEdyb3VwKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQmxvb2RDb21wb25lbnRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3Qmxvb2RDb21wb25lbnQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIHNldFNlbGVjdGVkQmxvb2RDb21wb25lbnQobmV3Qmxvb2RDb21wb25lbnQpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRTdGF0ZSkge1xuICAgICAgICAgICAgYWxlcnQoJ1N0YXRlIGlzIHJlcXVpcmVkLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2VsZWN0ZWREaXN0cmljdCkge1xuICAgICAgICAgICAgYWxlcnQoJ0Rpc3RyaWN0IGlzIHJlcXVpcmVkLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2VsZWN0ZWRCbG9vZEdyb3VwKSB7XG4gICAgICAgICAgICBhbGVydCgnQmxvb2QgR3JvdXAgaXMgcmVxdWlyZWQuJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzZWxlY3RlZEJsb29kQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBhbGVydCgnQmxvb2QgQ29tcG9uZW50IGlzIHJlcXVpcmVkLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdTdGF0ZTonLCBzZWxlY3RlZFN0YXRlKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0Rpc3RyaWN0OicsIHNlbGVjdGVkRGlzdHJpY3QpO1xuICAgICAgICBjb25zb2xlLmxvZygnQmxvb2QgR3JvdXA6Jywgc2VsZWN0ZWRCbG9vZEdyb3VwKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0Jsb29kIENvbXBvbmVudDonLCBzZWxlY3RlZEJsb29kQ29tcG9uZW50KTtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvcmFrYWRhdGEvc3RhdGVzJylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHNldFN0YXRlRGF0YShyZXNwb25zZSkpXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSlcbiAgICB9LCBbXSlcblxuICAgIGNvbnNvbGUubG9nKHN0YXRlRGF0YSlcblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtNVwiPlxuICAgICAgICA8ZGl2PkJsb29kIFN0b2NrIEF2YWlsYWJpbGl0eTwvZGl2PlxuICAgICAgICB7c3RhdGVEYXRhICYmXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC01XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1tZCBtYi0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCIuZm9ybS1zZWxlY3QtbGcgZXhhbXBsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU3RhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZURhdGE/Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2l0ZW19PntpdGVtfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IFN0YXRlPC9vcHRpb24+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8b3B0aW9uIHZhbHVlPVwiMVwiPk9uZTwvb3B0aW9uPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPG9wdGlvbiB2YWx1ZT1cIjJcIj5Ud288L29wdGlvbj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxvcHRpb24gdmFsdWU9XCIzXCI+VGhyZWU8L29wdGlvbj4qL31cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1tZCBtYi0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCIuZm9ybS1zZWxlY3QtbGcgZXhhbXBsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRGlzdHJpY3RDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWREaXN0cmljdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNEaXN0cmljdEVuYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IERpc3RyaWN0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPk9uZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5Ud288L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+VGhyZWU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdCBmb3JtLXNlbGVjdC1tZCBtYi0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCIuZm9ybS1zZWxlY3QtbGcgZXhhbXBsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQmxvb2RHcm91cENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZEJsb29kR3JvdXB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZT17XCJcIn0+U2VsZWN0IEJsb29kIEdyb3VwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQSUyQlwiPkErPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQSUyRFwiPkEtPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQiUyQlwiPkIrPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQiUyRFwiPkItPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQUIlMkJcIj5BQis8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBQiUyRFwiPkFCLTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk8lMkJcIj5PKzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk8lMkRcIj5PLTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LW1kIG1iLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIi5mb3JtLXNlbGVjdC1sZyBleGFtcGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVCbG9vZENvbXBvbmVudENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZEJsb29kQ29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWU9e1wiXCJ9PlNlbGVjdCBCbG9vZCBDb21wb25lbnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJXaG9sZSBCbG9vZFwiPldob2xlIEJsb29kPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiPlNpbmdsZSBEb25vciBQbGF0ZWxldFwiPlNpbmdsZSBEb25vciBQbGF0ZWxldDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNpbmdsZSBEb25vciBQbGFzbWFcIj5TaW5nbGUgRG9ub3IgUGxhc21hPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUGxhc21hXCI+UGxhc21hPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUGxhdGVsZXRzXCI+UGxhdGVsZXRzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTIgbXQtMFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi10aGVtZSBweS0yIHB4LTVcIiBvbkNsaWNrPXtoYW5kbGVTZWFyY2h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgU2VhcmNoXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+fVxuICAgIDwvZGl2Pik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb29raW5nRm9yQmxvb2Q7XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJMb29raW5nRm9yQmxvb2QiLCJzdGF0ZURhdGEiLCJzZWxlY3RlZFN0YXRlIiwic2V0U2VsZWN0ZWRTdGF0ZSIsInNlbGVjdGVkRGlzdHJpY3QiLCJzZXRTZWxlY3RlZERpc3RyaWN0Iiwic2VsZWN0ZWRCbG9vZEdyb3VwIiwic2V0U2VsZWN0ZWRCbG9vZEdyb3VwIiwic2VsZWN0ZWRCbG9vZENvbXBvbmVudCIsInNldFNlbGVjdGVkQmxvb2RDb21wb25lbnQiLCJpc0Rpc3RyaWN0RW5hYmxlZCIsInNldElzRGlzdHJpY3RFbmFibGVkIiwic2V0U3RhdGVEYXRhIiwidW5kZWZpbmVkIiwiaGFuZGxlU3RhdGVDaGFuZ2UiLCJldmVudCIsIm5ld1N0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVEaXN0cmljdENoYW5nZSIsIm5ld0Rpc3RyaWN0IiwiaGFuZGxlQmxvb2RHcm91cENoYW5nZSIsIm5ld0Jsb29kR3JvdXAiLCJoYW5kbGVCbG9vZENvbXBvbmVudENoYW5nZSIsIm5ld0Jsb29kQ29tcG9uZW50IiwiaGFuZGxlU2VhcmNoIiwiYWxlcnQiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJlIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VsZWN0IiwiYXJpYS1sYWJlbCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJtYXAiLCJpdGVtIiwib3B0aW9uIiwiZGlzYWJsZWQiLCJkZWZhdWx0VmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/lookingForBlood.js\n"));

/***/ })

});