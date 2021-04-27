const weatherData = () => {
  const button = document.querySelector('.submit');
  const cityName = document.querySelector('.location');
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=7eda76c00c8d93b65261bc92f2f405e0`;
  button.addEventListener('click', () => {
    fetch(api)
      .then(response => {
        response.json();
      })
      .then(data => {
        window.console.log(data);
      });
  });
};

export { weatherData };