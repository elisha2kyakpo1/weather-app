const pageload = () => {
  const content = document.querySelector('#content');
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
};

export { pageload };