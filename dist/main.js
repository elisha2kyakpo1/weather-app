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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather_temp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather/temp */ \"./src/weather/temp.js\");\n\n\nconst inputEl = document.getElementById('city-name');\nconst searchBtn = document.getElementById('search-btn');\nconst metricBtn = document.querySelector('.metric');\nconst imperialBtn = document.querySelector('.imperial');\nconst errors = document.querySelector('.error');\n\nconst filterWeatherData = (data) => ({\n  id: data.weather[0].id,\n  name: data.name,\n  description: data.weather[0].description,\n  icon: data.weather[0].icon,\n  temp: Math.round(data.main.temp),\n  feels: Math.round(data.main.feels_like),\n  humidity: data.main.humidity,\n  wind: data.wind.speed,\n  pressure: data.main.pressure,\n});\n\nconst fetchWeather = (name, unit) => {\n  fetch(\n    `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=${unit}&appid=7eda76c00c8d93b65261bc92f2f405e0`,\n    {\n      mode: 'cors',\n    },\n  )\n    .then((resp) => resp.json())\n    .then((resp) => {\n      if (resp.cod && resp.cod === '404') {\n        throw Error(resp.message);\n      }\n      return resp;\n    })\n    .then((resp) => {\n      const selectedCityWeather = filterWeatherData(resp);\n      (0,_weather_temp__WEBPACK_IMPORTED_MODULE_0__.default)(selectedCityWeather, unit);\n    })\n    .catch((err) => {\n      if (err) {\n        errors.textContent = `${err}!`;\n        setTimeout(() => document.querySelector('.error').remove(), 3000);\n      }\n    });\n};\n\nconst setWeather = (() => {\n  let unit = 'metric';\n  let name = 'lusaka';\n\n  const search = (e) => {\n    if (inputEl.value) {\n      e.preventDefault();\n      name = inputEl.value;\n      fetchWeather(name, unit);\n    }\n  };\n\n  const switchToMetric = () => {\n    unit = 'metric';\n    fetchWeather(name, unit);\n  };\n\n  const switchToImperial = () => {\n    unit = 'imperial';\n    fetchWeather(name, unit);\n  };\n\n  return {\n    search,\n    switchToMetric,\n    switchToImperial,\n  };\n})();\n\nfetchWeather('Lusaka', 'metric');\n\nsearchBtn.addEventListener('click', (e) => {\n  setWeather.search(e);\n});\n\nimperialBtn.addEventListener('click', setWeather.switchToImperial);\nmetricBtn.addEventListener('click', setWeather.switchToMetric);\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather/temp.js":
/*!*****************************!*\
  !*** ./src/weather/temp.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst nameEl = document.querySelector('.city-name');\nconst descriptionEl = document.querySelector('.weather-description');\nconst iconEl = document.querySelector('.icon');\nconst temperatureEl = document.querySelector('.temperature');\nconst windEl = document.querySelector('.wind-data');\nconst pressureEl = document.querySelector('.pressure-data');\nconst feelEl = document.querySelector('.feel-data');\nconst humidityEl = document.querySelector('.humidity-data');\nconst metricBtn = document.querySelector('.metric');\nconst imperialBtn = document.querySelector('.imperial');\nconst titleBody = document.getElementById('content');\nconst title = document.createElement('h1');\ntitle.textContent = 'Weather';\ntitleBody.appendChild(title);\n\nconst renderInfo = (data, unit) => {\n  iconEl.src = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;\n  nameEl.textContent = data.name;\n  descriptionEl.textContent = data.description;\n  humidityEl.textContent = `Humidity: ${data.humidity} %`;\n  humidityEl.style.fontWeight = '200';\n  pressureEl.textContent = `Pressure: ${data.pressure} hPa`;\n  pressureEl.style.fontWeight = '200';\n\n  if (unit === 'metric') {\n    temperatureEl.textContent = `Temperture: ${data.temp} ${String.fromCharCode(176)}C`;\n    windEl.textContent = `Wind: ${data.humidity} km/h`;\n    windEl.style.fontWeight = '200';\n    feelEl.textContent = `Feels Like: ${data.feels} ${String.fromCharCode(176)}C`;\n    feelEl.style.fontWeight = '200';\n    metricBtn.classList.add('active');\n    imperialBtn.classList.remove('active');\n  } else {\n    temperatureEl.textContent = `Temperature: ${data.temp} ${String.fromCharCode(176)}F`;\n    windEl.textContent = `Wind: ${data.humidity} m/h`;\n    windEl.style.fontWeight = '200';\n    feelEl.textContent = `Feels Like${data.feels} ${String.fromCharCode(176)}F`;\n    feelEl.style.fontWeight = '200';\n    metricBtn.classList.remove('active');\n    imperialBtn.classList.add('active');\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderInfo);\n\n//# sourceURL=webpack://weather-app/./src/weather/temp.js?");

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