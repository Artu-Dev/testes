import home from './pages/home/index.js'
import about from './pages/about/index.js'
import contacts from './pages/contacts/index.js'
import notFound from './pages/404/index.js'

const main = document.querySelector('#root');

const init = () => {
  mainChange()
  window.addEventListener('hashchange', () => {
    mainChange()
  })
}

function changeCSS(pagina) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `css/${pagina}.css`;
  document.head.appendChild(link);
  console.log(document.head)
}

function mainChange() {
  main.innerHTML = "";
  document.head.lastChild.remove()
  switch(window.location.hash){
    case "":
      changeCSS("padrao")
      main.appendChild(home());
      break;
    case "#about":
        changeCSS("padrao")
        main.appendChild(about());
        break;
    case "#contacts":
      changeCSS("contato")
      main.appendChild(contacts());
      break;
    default:
      main.appendChild(notFound());
      changeCSS("404")
  }
}

window.addEventListener("load", () => {
  init();
});