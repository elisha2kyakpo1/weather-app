import renderInfo from './weather/temp';

const inputEl = document.getElementById('city-name');
const searchBtn = document.getElementById('search-btn');
const metricBtn = document.querySelector('.metric');
const imperialBtn = document.querySelector('.imperial');
const errors = document.querySelector('.error');

function filterWeatherData(data) {
  return {
    id: data.weather[0].id,
    name: data.name,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    temp: Math.round(data.main.temp),
    feels: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    wind: data.wind.speed,
    pressure: data.main.pressure,
  };
}

const fetchWeather = (name, unit) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=${unit}&appid=7eda76c00c8d93b65261bc92f2f405e0`,
    {
      mode: 'cors',
    },
  )
    .then((resp) => resp.json())
    .then((resp) => {
      if (resp.cod && resp.cod === '404') {
        throw Error(resp.message);
      }
      return resp;
    })
    .then((resp) => {
      const selectedCityWeather = filterWeatherData(resp);
      renderInfo(selectedCityWeather, unit);
    })
    .catch((err) => {
      if (err) {
        errors.textContent = err;
        setTimeout(() => document.querySelector('.error').remove(), 3000);
      }
    });
};

const setWeather = (() => {
  let unit = 'metric';
  let name = '';

  const search = (e) => {
    if (inputEl.value) {
      e.preventDefault();
      name = inputEl.value;
      fetchWeather(name, unit);
    }
    name = '';
  };

  const switchToMetric = () => {
    unit = 'metric';
    fetchWeather(name, unit);
  };

  const switchToImperial = () => {
    unit = 'imperial';
    fetchWeather(name, unit);
  };

  return {
    search,
    switchToMetric,
    switchToImperial,
  };
})();

fetchWeather('Lusaka', 'metric');

searchBtn.addEventListener('click', (e) => {
  setWeather.search(e);
});

imperialBtn.addEventListener('click', setWeather.switchToImperial);
metricBtn.addEventListener('click', setWeather.switchToMetric);