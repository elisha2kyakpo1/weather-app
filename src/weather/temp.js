const nameEl = document.querySelector('.city-name');
const descriptionEl = document.querySelector('.weather-description');
const iconEl = document.querySelector('.icon');
const temperatureEl = document.querySelector('.temperature');
const windEl = document.querySelector('.wind-data');
const pressureEl = document.querySelector('.pressure-data');
const feelEl = document.querySelector('.feel-data');
const humidityEl = document.querySelector('.humidity-data');
const metricBtn = document.querySelector('.metric');
const imperialBtn = document.querySelector('.imperial');
const titleBody = document.getElementById('content');
const title = document.createElement('h1');
title.textContent = 'Weather';
titleBody.appendChild(title);

const renderInfo = (data, unit) => {
  iconEl.src = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
  nameEl.textContent = data.name;
  descriptionEl.textContent = data.description;
  humidityEl.textContent = `Humidity: ${data.humidity} %`;
  humidityEl.style.fontWeight = '200';
  pressureEl.textContent = `Pressure: ${data.pressure} hPa`;
  pressureEl.style.fontWeight = '200';

  if (unit === 'metric') {
    temperatureEl.textContent = `Temperture: ${data.temp} ${String.fromCharCode(176)}C`;
    windEl.textContent = `Wind: ${data.humidity} km/h`;
    windEl.style.fontWeight = '200';
    feelEl.textContent = `Feels Like: ${data.feels} ${String.fromCharCode(176)}C`;
    feelEl.style.fontWeight = '200';
    metricBtn.classList.add('active');
    imperialBtn.classList.remove('active');
  } else {
    temperatureEl.textContent = `Temperature: ${data.temp} ${String.fromCharCode(176)}F`;
    windEl.textContent = `Wind: ${data.humidity} m/h`;
    windEl.style.fontWeight = '200';
    feelEl.textContent = `Feels Like${data.feels} ${String.fromCharCode(176)}F`;
    feelEl.style.fontWeight = '200';
    metricBtn.classList.remove('active');
    imperialBtn.classList.add('active');
  }
};

export default renderInfo;