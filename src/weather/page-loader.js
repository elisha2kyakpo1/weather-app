// import {
//   render,
//   processedData,
//   createError,
// } from './temp';
// require('dotenv').config();

const content = document.querySelector('#content');
const button = document.createElement('button');

const divMain = document.createElement('div');
divMain.setAttribute('class', 'mainDiv');
const pageTitle = document.createElement('h1');
pageTitle.setAttribute('class', 'app-title');
pageTitle.textContent = 'Weather App';
divMain.appendChild(pageTitle);
content.appendChild(divMain);

const form = document.createElement('form');
form.setAttribute('class', 'search-form');
const input = document.createElement('input');
input.setAttribute('class', 'form-input');
input.placeholder = 'Enter city name';
button.textContent = 'search';
button.setAttribute('class', 'sub-button');
form.appendChild(input);
form.appendChild(button);
divMain.appendChild(form);

const weatherDiv = document.createElement('div');
const divInner = document.createElement('div');
weatherDiv.appendChild(divInner);
divMain.appendChild(weatherDiv);
weatherDiv.setAttribute('class', 'weather-div');

let searches = [];
let showError = true;

const render = () => {
  const container = document.createElement('div');
  container.setAttribute('id', 'history');
  container.textContent = '';
  searches.forEach((search) => {
    const main = document.createElement('div');
    main.id = 'historicsearch';
    const location = document.createElement('h4');
    location.textContent = search.location;
    location.id = 'location';
    main.appendChild(location);
    const datadiv = document.createElement('div');
    datadiv.id = 'data';
    const description = document.createElement('p');
    description.textContent = search.description.charAt(0).toUpperCase()
    + search.description.slice(1);
    description.id = 'description';
    datadiv.appendChild(description);
    const temp = document.createElement('p');
    temp.textContent = `Temperature: ${search.temp}`;
    temp.id = 'temp';
    datadiv.appendChild(temp);
    const feelsLike = document.createElement('p');
    feelsLike.textContent = `Feels like: ${search.feels_like}`;
    feelsLike.id = 'feels_like';
    datadiv.appendChild(feelsLike);
    const humidity = document.createElement('p');
    humidity.textContent = `Humidity: ${search.humidity}`;
    humidity.id = 'humidity';
    datadiv.appendChild(humidity);
    const windSpeed = document.createElement('p');
    windSpeed.textContent = `Wind speed: ${search.wind_speed}`;
    windSpeed.id = 'wind_speed';
    datadiv.appendChild(windSpeed);
    main.appendChild(datadiv);
    const icon = document.createElement('img');
    icon.id = 'icon';
    main.appendChild(icon);
    container.appendChild(main);
    main.classList.toggle('fade');
    setTimeout(() => {
      main.classList.toggle('fade');
    }, 200);
  });
};

const processedData = (json) => {
  const data = {
    location: `${json.name}, ${json.sys.country}`,
    temp: `${Math.round(json.main.temp) - 273} °C`,
    feels_like: `${Math.round(json.main.feels_like) - 273} °C`,
    humidity: `${json.main.humidity} %`,
    wind_speed: `${Math.round(json.wind.speed)} MPH`,
    description: `${json.weather[0].description}`,
    icon: `${json.weather[0].icon}`,
  };
  searches = [data, ...searches];
  render();
};

const createError = (message) => {
  if (showError) {
    showError = false;
    const search = document.createElement('div');
    search.setAttribute('id', 'search');
    const paragraph = document.createElement('p');
    paragraph.id = 'error';
    paragraph.textContent = `Oops, an error occured: ${message}`;
    search.appendChild(paragraph);
    setTimeout(() => {
      paragraph.classList.toggle('fade');
    }, 2000);
    setTimeout(() => {
      search.removeChild(paragraph);
      showError = true;
    }, 2200);
  }
};

const api = {
  key: '&appid=7eda76c00c8d93b65261bc92f2f405e0',
  url: 'https://api.openweathermap.org/data/2.5/weather?q=',
};

const getWeatherData = (location) => {
  fetch(`${api.url}${location}${api.key}`, { mode: 'cors' })
    .then(async (response) => {
      const json = await response.json();
      if (!json.message) {
        processedData(json);
      } else {
        createError(json.message);
      }
    });
};

const processData = () => {
  button.addEventListener('click', () => {
    getWeatherData(input.value);
    render();
  });
};

export { processData, getWeatherData };