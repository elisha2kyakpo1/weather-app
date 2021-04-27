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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather_page_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather/page-loader */ \"./src/weather/page-loader.js\");\n/* harmony import */ var _weather_api_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather/api-loader */ \"./src/weather/api-loader.js\");\n\n\n\n(0,_weather_api_loader__WEBPACK_IMPORTED_MODULE_1__.weatherData)();\n(0,_weather_page_loader__WEBPACK_IMPORTED_MODULE_0__.pageload)();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather/api-loader.js":
/*!***********************************!*\
  !*** ./src/weather/api-loader.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"weatherData\": () => (/* binding */ weatherData)\n/* harmony export */ });\nconst weatherData = () => {\n  const button = document.querySelector('.submit');\n  const cityName = document.querySelector('.location');\n  const proxy = 'https://cors-anywhere.herokuapp.com/';\n  const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=7eda76c00c8d93b65261bc92f2f405e0`;\n  button.addEventListener('click', () => {\n    fetch(api)\n      .then(response => {\n        response.json();\n      })\n      .then(data => {\n        window.console.log(data);\n      });\n  });\n};\n\n\n\n//# sourceURL=webpack://weather-app/./src/weather/api-loader.js?");

/***/ }),

/***/ "./src/weather/page-loader.js":
/*!************************************!*\
  !*** ./src/weather/page-loader.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageload\": () => (/* binding */ pageload)\n/* harmony export */ });\nconst pageload = () => {\n  const content = document.querySelector('#content');\n  const divMain = document.createElement('div');\n  divMain.setAttribute('class', 'mainDiv');\n  const divContainer = document.createElement('div');\n  const divInner = document.createElement('div');\n  divContainer.appendChild(divInner);\n  const pageTitle = document.createElement('h1');\n  pageTitle.setAttribute('class', 'app-title');\n  pageTitle.textContent = 'Weather infomation';\n  divMain.appendChild(pageTitle);\n  divMain.appendChild(divContainer);\n  divContainer.setAttribute('class', 'page-container');\n  content.appendChild(divMain);\n};\n\n\n\n//# sourceURL=webpack://weather-app/./src/weather/page-loader.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;