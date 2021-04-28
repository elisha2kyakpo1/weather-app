const content = document.querySelector('#content');
const pageload = () => {
  const divMain = document.createElement('div');
  divMain.setAttribute('class', 'mainDiv');
  const divContainer = document.createElement('div');
  const divInner = document.createElement('div');
  divContainer.appendChild(divInner);
  const pageTitle = document.createElement('h1');
  pageTitle.setAttribute('class', 'app-title');
  pageTitle.textContent = 'Weather infomation';
  divMain.appendChild(pageTitle);
  divMain.appendChild(divContainer);
  divContainer.setAttribute('class', 'page-container');
  content.appendChild(divMain);

  const form = document.createElement('form');
  form.setAttribute('class', 'search-form');
  const input = document.createElement('input');
  input.setAttribute('class', 'form-input form-control');
  input.value = 'search';
  const button = document.createElement('button');
  button.setAttribute('class', 'sub-button');
  form.appendChild(input);
  form.appendChild(button);
  content.appendChild(form);
};

// let temp = document.querySelector('#result-temp');
// let minTemp = document.querySelector('#result-mintemp');
// let maxTemp = document.querySelector('#result-maxtemp');
// let feelingTemp = document.querySelector('#result-feeling');

// let tempsElem = [temp, minTemp, maxTemp, feelingTemp];

// function convertTemps() {
//   let temps = tempsElem.map(
//     (temp) => temp.innerText.match(/-?[\d\.]+(?=[°])/)[0]
//   );
//   tempsElem.forEach((tempElem, index) => {
//     let convertedTemp = convertTemp(temps[index]);
//     tempElem.innerText = `${Math.round(convertedTemp * 10) / 10}°`;
//   });
//   currentUnit = currentUnit === 0 ? 1 : 0;
// }

// const tempConterter = (temp) => {
//   if (currentUnit === 0) {
//     return 1.8 * Number(temp) + 32;
//   } else (currentUnit === 1) {
//     return (5 / 9) * (Number(temp) - 32);
//   }
// }

// export { convertTemps }

export { pageload, content };