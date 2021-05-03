let searches = [];
let showError = true;

const content = document.querySelector('#content');
const divMain = document.createElement('div');
divMain.setAttribute('class', 'mainDiv');
const pageTitle = document.createElement('h1');
pageTitle.setAttribute('class', 'app-title');
pageTitle.textContent = 'Weather App';
divMain.appendChild(pageTitle);
content.appendChild(divMain);
const searchButton = document.getElementById('searchbutton');
const searchInput = document.getElementById('searchinput');
const createError = (message) => {
  if (showError) {
    showError = false;
    const search = document.getElementById('search');
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

const render = () => {
  const container = document.getElementById('history');
  container.textContent = '';
  searches.forEach((search) => {
    const main = document.createElement('div');
    const innerDiv = document.createElement('div');
    main.id = 'data-search';
    main.setAttribute('class', 'main-container');
    const location = document.createElement('h4');
    main.appendChild(innerDiv);
    innerDiv.appendChild(location);
    location.textContent = search.location;
    location.id = 'location';
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
    innerDiv.appendChild(datadiv);
    const icon = document.createElement('img');
    icon.id = 'icon';
    container.appendChild(main);
    main.classList.toggle('fade');
    setTimeout(() => {
      main.classList.toggle('fade');
    }, 200);
  });
  searchButton.disabled = false;
};

const api = {
  key: '&appid=7eda76c00c8d93b65261bc92f2f405e0',
  url: 'https://api.openweathermap.org/data/2.5/weather?q=',
};

const processData = (json) => {
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

const tempSwitch = document.getElementById('my-switch');

tempSwitch.addEventListener('click', () => {
  if (processData.data.temp) {
    return `${(processData.data.temp * 1.8) + 32} °F`;
  }
});

const getWeatherData = (location) => {
  searchButton.disabled = true;

  fetch(`${api.url}${location}${api.key}`, { mode: 'cors' })
    .then(async (response) => {
      const json = await response.json();
      if (!json.message) {
        processData(json);
      } else {
        createError(json.message);
        searchButton.disabled = false;
      }
    });
};

searchButton.addEventListener('click', () => {
  getWeatherData(searchInput.value);
});

export { getWeatherData };