exports.id = 947;
exports.ids = [947];
exports.modules = {

/***/ 6004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7113);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9985);
// Styles


// React


function MyApp({ Component, pageProps }) {
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        typeof document !== undefined ? __webpack_require__(7064) : null;
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
            className: "app",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);


/***/ }),

/***/ 6088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        "data-bs-theme": "dark",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 9985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./assets/images/brand.svg
/* harmony default export */ const brand = ({"src":".//_next/static/media/brand.7d268a98.svg","height":45,"width":116,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./components/NavbarComponent.js





const NavbarComponent = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("nav", {
        className: "navbar navbar-expand-lg navbar-light bg-light",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container-fluid",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: brand,
                    width: 65,
                    height: 65
                }),
                /*#__PURE__*/ jsx_runtime.jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#navbarNav",
                    "aria-controls": "navbarNav",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "navbar-toggler-icon"
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarNav",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        className: "navbar-nav",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    className: "nav-link",
                                    href: "/",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    className: "nav-link",
                                    href: "lookingForBlood",
                                    children: "Looking for Blood"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    className: "nav-link",
                                    href: "donateBlood",
                                    children: "Donate Blood"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    className: "nav-link",
                                    href: "learn",
                                    children: "Learn"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    className: "nav-link",
                                    href: "login",
                                    children: "login/signUp"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_NavbarComponent = (NavbarComponent);

;// CONCATENATED MODULE: ./components/Footer.js




const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "hero-section text-center mt-5",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                src: brand,
                width: 65,
                height: 65
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                children: "Copyright@2023 Roehampton"
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./pages/layout.js



function Layout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(components_NavbarComponent, {}),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime.jsx(components_Footer, {})
        ]
    });
}


/***/ }),

/***/ 7113:
/***/ (() => {



/***/ })

};
;