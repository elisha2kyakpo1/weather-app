// require('dotenv').config();

let lat;
let long;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    lat = position.coords.latitude;
    long = position.coords.longitude;
  });
}

//   const api = {
//     key: '7eda76c00c8d93b65261bc92f2f405e0',
//     url: 'https://api.openweathermap.org/data/2.5/',
//   };
//   // const button = document.querySelector('.submit');
//   // const cityName = document.querySelector('.location');

//   const getResults = (location) => {
//     fetch(`${api.url}weather?q=${location}&units=metric&APPID=${api.key}`)
//     .then(weather => {
//       return weather.json;
//     }).then( data => {
//       console.log(data);
//     })
//   }

// button.addEventListener('click', (action) => {
//   action.preventDefault();
//   getResults(input.value)
// })

// const temp = () => {
//   const tempChange = document.querySelector('content');
//   const contentImageChange = document.createElement('div');
//   if (tempChange < 20) {
//     contentImageChange.setAttribute('class', 'cloud-sky');
//   } else if (tempChange >= 20 && tempChange < 30) {
//     contentImageChange.setAttribute('class', 'windy');
//   } else {
//     contentImageChange.setAttribute('class', 'sunny');
//   }
// };

// let currentUnit = 0; // 0 - Celsius 1 - Fahrenheit

// function parseTemp(temp) {
//   let parsedTemp =
//     currentUnit === 0 ? Number(temp) - 273.1 : 1.8 * (Number(temp) - 273) + 32;
//   return Math.round(parsedTemp * 10) / 10;
// }

// function filterData(weatherData) {
//   let city = weatherData.name;
//   let country = weatherData.sys.country;
//   let place = `${city}, ${country}`;
//   let { main: weatherTitle, description: weatherDesc } = weatherData.weather[0];
//   let details = weatherData.main;
//   let {
//     feels_like: feeling,
//     humidity,
//     pressure,
//     temp,
//     temp_max: maxTemp,
//     temp_min: minTemp,
//   } = details;

//   return {
//     place,
//     weatherTitle,
//     weatherDesc,
//     feeling: parseTemp(feeling),
//     humidity,
//     pressure,
//     temp: parseTemp(temp),
//     maxTemp: parseTemp(maxTemp),
//     minTemp: parseTemp(minTemp),
//   };
// }

// function fillResult({
//   place,
//   weatherTitle,
//   weatherDesc,
//   feeling,
//   humidity,
//   pressure,
//   temp,
//   maxTemp,
//   minTemp,
// }) {
//   let results = [
//     { elementId: '#result-temp', value: `${temp}°` },
//     { elementId: '#result-place', value: place },
//     { elementId: '#result-weather', value: weatherTitle },
//     { elementId: '#result-weather-desc', value: weatherDesc },
//     { elementId: '#result-feeling', value: `${feeling}°` },
//     { elementId: '#result-humidity', value: `${humidity}%` },
//     { elementId: '#result-pressure', value: `${pressure}mb` },
//     { elementId: '#result-mintemp', value: `${minTemp}°` },
//     { elementId: '#result-maxtemp', value: `${maxTemp}°` },
//   ];

//   for (let { elementId, value } of results) {
//     document.querySelector(elementId).innerText = value;
//   }
// }