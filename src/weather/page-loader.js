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

export { pageload, content };