// require('dotenv').config();

// const content = document.querySelector('#content');
// const button = document.createElement('button');

// const divMain = document.createElement('div');
// divMain.setAttribute('class', 'mainDiv');
// const pageTitle = document.createElement('h1');
// pageTitle.setAttribute('class', 'app-title');
// pageTitle.textContent = 'Weather App';
// divMain.appendChild(pageTitle);
// content.appendChild(divMain);

// const form = document.createElement('form');
// form.setAttribute('class', 'search-form');
// const input = document.createElement('input');
// input.setAttribute('class', 'form-input');
// input.placeholder = 'Enter city name';
// button.textContent = 'search';
// button.setAttribute('class', 'sub-button');
// form.appendChild(input);
// form.appendChild(button);
// divMain.appendChild(form);

// const weatherDiv = document.createElement('div');
// const divInner = document.createElement('div');
// weatherDiv.appendChild(divInner);
// divMain.appendChild(weatherDiv);
// weatherDiv.setAttribute('class', 'weather-div');

const api = {
  key: '7eda76c00c8d93b65261bc92f2f405e0',
  url: 'https://api.openweathermap.org/data/2.5/',
};

const getResults = (location) => {
  fetch(`${api.url}weather?q=${location}&units=metric&APPID=${api.key}`)
    .then((weather) => weather.json).then((data) => {
      window.console.log(data);
    });
// };

const processData = () => {
  button.addEventListener('click', () => {
    window.console.log(getResults(input.value));
  });
};

// let temp = document.querySelector('#result-temp');
// let minTemp = document.querySelector('#result-mintemp');
// let maxTemp = document.querySelector('#result-maxtemp');
// let feelingTemp = document.querySelector('#result-feeling');

// let tempsElem = [temp, minTemp, maxTemp, feelingTemp];

// export { convertTemps }

// export { processData };