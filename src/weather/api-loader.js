import content from './page-loader';
// require('dotenv').config();

// const weatherData = () => {
//   const button = document.querySelector('.submit');
//   const cityName = document.querySelector('.location');
//   const proxy = 'https://cors-anywhere.herokuapp.com/';
//   const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${process.env.API_KEY}`;
//   button.addEventListener('click', () => {
//     fetch(api)
//       .then(response => {
//         response.json();
//       })
//       .then(data => {
//         window.console.log(data);
//       });
//   });
// };
const temp = () => {
  const tempChange = document.querySelector('content');
  const contentImageChange = document.createElement('div');
  if (tempChange < 20) {
    contentImageChange.setAttribute('class', 'cloud-sky');
  } else if (tempChange >= 20 && tempChange < 30) {
    contentImageChange.setAttribute('class', 'windy');
  } else {
    contentImageChange.setAttribute('class', 'sunny');
  }
};

// window.console.log(process.env);

export { weatherData, temp };