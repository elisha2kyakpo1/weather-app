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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather_temp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather/temp */ \"./src/weather/temp.js\");\n\n\n(0,_weather_temp__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather/temp.js":
/*!*****************************!*\
  !*** ./src/weather/temp.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherData\": () => (/* binding */ getWeatherData)\n/* harmony export */ });\nlet searches = [];\nlet showError = true;\n\nconst content = document.querySelector('#content');\nconst divMain = document.createElement('div');\ndivMain.setAttribute('class', 'mainDiv');\nconst pageTitle = document.createElement('h1');\npageTitle.setAttribute('class', 'app-title');\npageTitle.textContent = 'Weather App';\ndivMain.appendChild(pageTitle);\ncontent.appendChild(divMain);\nconst searchButton = document.getElementById('searchbutton');\nconst searchInput = document.getElementById('searchinput');\nconst createError = (message) => {\n  if (showError) {\n    showError = false;\n    const search = document.getElementById('search');\n    const paragraph = document.createElement('p');\n    paragraph.id = 'error';\n    paragraph.textContent = `Oops, an error occured: ${message}`;\n    search.appendChild(paragraph);\n    setTimeout(() => {\n      paragraph.classList.toggle('fade');\n    }, 2000);\n    setTimeout(() => {\n      search.removeChild(paragraph);\n      showError = true;\n    }, 2200);\n  }\n};\n\nconst render = () => {\n  const container = document.getElementById('history');\n  container.textContent = '';\n  searches.forEach((search) => {\n    const main = document.createElement('div');\n    const innerDiv = document.createElement('div');\n    main.id = 'data-search';\n    main.setAttribute('class', 'main-container');\n    const location = document.createElement('h4');\n    main.appendChild(innerDiv);\n    innerDiv.appendChild(location);\n    location.textContent = search.location;\n    location.id = 'location';\n    const datadiv = document.createElement('div');\n    datadiv.id = 'data';\n    const description = document.createElement('p');\n    description.textContent = search.description.charAt(0).toUpperCase()\n     + search.description.slice(1);\n    description.id = 'description';\n    datadiv.appendChild(description);\n    const temp = document.createElement('p');\n    temp.textContent = `Temperature: ${search.temp}`;\n    temp.id = 'temp';\n    datadiv.appendChild(temp);\n    const feelsLike = document.createElement('p');\n    feelsLike.textContent = `Feels like: ${search.feels_like}`;\n    feelsLike.id = 'feels_like';\n    datadiv.appendChild(feelsLike);\n    const humidity = document.createElement('p');\n    humidity.textContent = `Humidity: ${search.humidity}`;\n    humidity.id = 'humidity';\n    datadiv.appendChild(humidity);\n    const windSpeed = document.createElement('p');\n    windSpeed.textContent = `Wind speed: ${search.wind_speed}`;\n    windSpeed.id = 'wind_speed';\n    datadiv.appendChild(windSpeed);\n    innerDiv.appendChild(datadiv);\n    const icon = document.createElement('img');\n    icon.id = 'icon';\n    container.appendChild(main);\n    main.classList.toggle('fade');\n    setTimeout(() => {\n      main.classList.toggle('fade');\n    }, 200);\n  });\n  searchButton.disabled = false;\n};\n\nconst api = {\n  key: '&appid=7eda76c00c8d93b65261bc92f2f405e0',\n  url: 'https://api.openweathermap.org/data/2.5/weather?q=',\n};\n\nconst convertToF = (celsius) => {\n  const fahrenheit = celsius(9 / 5) + 32;\n  return fahrenheit;\n};\n\nconst processData = (json) => {\n  const data = {\n    location: `${json.name}, ${json.sys.country}`,\n    temp: `${Math.round(json.main.temp) - 273} °C`,\n    feels_like: `${Math.round(json.main.feels_like) - 273} °C`,\n    humidity: `${json.main.humidity} %`,\n    wind_speed: `${Math.round(json.wind.speed)} MPH`,\n    description: `${json.weather[0].description}`,\n    icon: `${json.weather[0].icon}`,\n  };\n  searches = [data, ...searches];\n  render();\n};\n\nconst tempSwitch = document.getElementById('my-switch');\n\ntempSwitch.addEventListener('click', () => {\n  if (processData.data.temp) {\n    return `${(processData.data.temp * 1.8) + 32} °F`;\n  }\n});\n\nconst getWeatherData = (location) => {\n  searchButton.disabled = true;\n\n  fetch(`${api.url}${location}${api.key}`, { mode: 'cors' })\n    .then(async (response) => {\n      const json = await response.json();\n      if (!json.message) {\n        processData(json);\n      } else {\n        createError(json.message);\n        searchButton.disabled = false;\n      }\n    });\n};\n\nsearchButton.addEventListener('click', () => {\n  getWeatherData(searchInput.value);\n});\n\n\n\n//# sourceURL=webpack://weather-app/./src/weather/temp.js?");

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