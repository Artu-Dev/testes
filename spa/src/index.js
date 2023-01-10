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
}

function changeHTML(pagina) {
  import(`./pages/${pagina}/index.js`)
  .then(paginaJS => {
    main.appendChild(paginaJS.default())
  })
}

function mainChange() {
  main.innerHTML = "";
  document.head.lastChild.remove()
  switch(window.location.hash){
    case "":
      changeHTML("home");
      changeCSS("padrao");
      break;
    case "#about":
        changeHTML("about");
        changeCSS("padrao");
        break;
    case "#contacts":
      changeHTML("contacts");
      changeCSS("contato");
      break;
    default:
      changeHTML("404")
      changeCSS("404")
  }
}

window.addEventListener("load", () => {
  init();
});