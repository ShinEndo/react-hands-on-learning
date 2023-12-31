/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_Menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Menu.js */ \"./src/Menu.js\");\n/* harmony import */ var _src_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/data.json */ \"./src/data.json\");\nvar _jsxFileName = \"/Users/shimoyama/Desktop/Practice/react-hands-on-learning/chapter12/lesson2/server/index.js\";\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"./build\"));\n\n\n\n\nconst PORT = process.env.PORT || 4000;\napp.get(\"/*\", (req, res) => {\n  // const app = ReactDOMServer.renderToString(\n  //     <Menu recipes={data} title=\"Delicious REcipes\" />\n  // );\n\n  const renderedHtml = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src_Menu_js__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n    recipes: _src_data_json__WEBPACK_IMPORTED_MODULE_4__,\n    title: \"Delicious REcipes\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 56\n    }\n  }));\n  const indexFile = path.resolve(\"./build-server/index.html\");\n  fs.readFile(indexFile, \"utf8\", (err, data) => {\n    console.log(`loaded!`);\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${renderedHtml}</div>`));\n  });\n});\napp.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));\n\n//# sourceURL=webpack://lesson2/./server/index.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/shimoyama/Desktop/Practice/react-hands-on-learning/chapter12/lesson2/src/Menu.js\";\n\nfunction Recipe({\n  name,\n  ingredients,\n  steps\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", {\n    id: name.toLowerCase().replace(/ /g, \"-\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }\n  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    classNme: \"ingredients\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }\n  }, ingredients.map((ingredient, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    key: i,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 21\n    }\n  }, ingredient.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", {\n    className: \"instructions\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }, \"Cooking Instructions\"), steps.map((step, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    key: i,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 21\n    }\n  }, step))));\n}\nconst Menu = ({\n  title,\n  recipes\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"article\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"headre\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"recipes\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, recipes.map((recipe, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Recipe, Object.assign({\n    key: i\n  }, recipe, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 21\n    }\n  })))));\n};\n\n//# sourceURL=webpack://lesson2/./src/Menu.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"name\":\"Baked Salmon\",\"ingredients\":[{\"name\":\"Salmon\",\"amount\":1,\"measurement\":\"lb\"},{\"name\":\"Pine Nuts\",\"amount\":1,\"measurement\":\"cup\"},{\"name\":\"Butter Lettuce\",\"amount\":2,\"measurement\":\"cups\"},{\"name\":\"Yellow Squash\",\"amount\":1,\"measurement\":\"med\"},{\"name\":\"Olive Oil\",\"amount\":0.5,\"measurement\":\"cup\"},{\"name\":\"Garlic\",\"amount\":3,\"measurement\":\"cloves\"}],\"steps\":[\"Preheat the oven to 350 degrees.\",\"Spread the olive oil around a glass baking dish.\",\"Add the salmon, garlic, and pine nuts to the dish.\",\"Bake for 15 minutes.\",\"Add the yellow squash and put back in the oven for 30 mins.\",\"Remove from oven and let cool for 15 minutes. Add the lettuce and serve.\"]},{\"name\":\"Fish Tacos\",\"ingredients\":[{\"name\":\"Whitefish\",\"amount\":1,\"measurement\":\"lb\"},{\"name\":\"Cheese\",\"amount\":1,\"measurement\":\"cup\"},{\"name\":\"Iceberg Lettuce\",\"amount\":2,\"measurement\":\"cups\"},{\"name\":\"Tomatoes\",\"amount\":2,\"measurement\":\"large\"},{\"name\":\"Tortillas\",\"amount\":3,\"measurement\":\"med\"}],\"steps\":[\"Cook the fish on the grill until hot.\",\"Place the fish on the 3 tortillas.\",\"Top them with lettuce, tomatoes, and cheese.\"]}]');\n\n//# sourceURL=webpack://lesson2/./src/data.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;