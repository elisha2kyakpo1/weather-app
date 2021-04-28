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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather_page_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather/page-loader */ \"./src/weather/page-loader.js\");\n\n// import { weatherData } from './weather/api-loader';\n\n// weatherData();\n(0,_weather_page_loader__WEBPACK_IMPORTED_MODULE_0__.pageload)();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather/page-loader.js":
/*!************************************!*\
  !*** ./src/weather/page-loader.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageload\": () => (/* binding */ pageload),\n/* harmony export */   \"content\": () => (/* binding */ content)\n/* harmony export */ });\nconst content = document.querySelector('#content');\nconst pageload = () => {\n  const divMain = document.createElement('div');\n  divMain.setAttribute('class', 'mainDiv');\n  const divContainer = document.createElement('div');\n  const divInner = document.createElement('div');\n  divContainer.appendChild(divInner);\n  const pageTitle = document.createElement('h1');\n  pageTitle.setAttribute('class', 'app-title');\n  pageTitle.textContent = 'Weather infomation';\n  divMain.appendChild(pageTitle);\n  divMain.appendChild(divContainer);\n  divContainer.setAttribute('class', 'page-container');\n  content.appendChild(divMain);\n\n  const form = document.createElement('form');\n  form.setAttribute('class', 'search-form');\n  const input = document.createElement('input');\n  input.setAttribute('class', 'form-input form-control');\n  input.value = 'search';\n  const button = document.createElement('button');\n  button.setAttribute('class', 'sub-button');\n  form.appendChild(input);\n  form.appendChild(button);\n  content.appendChild(form);\n};\n\n// let temp = document.querySelector('#result-temp');\n// let minTemp = document.querySelector('#result-mintemp');\n// let maxTemp = document.querySelector('#result-maxtemp');\n// let feelingTemp = document.querySelector('#result-feeling');\n\n// let tempsElem = [temp, minTemp, maxTemp, feelingTemp];\n\n// function convertTemps() {\n//   let temps = tempsElem.map(\n//     (temp) => temp.innerText.match(/-?[\\d\\.]+(?=[°])/)[0]\n//   );\n//   tempsElem.forEach((tempElem, index) => {\n//     let convertedTemp = convertTemp(temps[index]);\n//     tempElem.innerText = `${Math.round(convertedTemp * 10) / 10}°`;\n//   });\n//   currentUnit = currentUnit === 0 ? 1 : 0;\n// }\n\n// const tempConterter = (temp) => {\n//   if (currentUnit === 0) {\n//     return 1.8 * Number(temp) + 32;\n//   } else (currentUnit === 1) {\n//     return (5 / 9) * (Number(temp) - 32);\n//   }\n// }\n\n// export { convertTemps }\n\n\n\n//# sourceURL=webpack://weather-app/./src/weather/page-loader.js?");

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