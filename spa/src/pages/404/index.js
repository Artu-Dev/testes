export default () => {
  const container = document.createElement('div');
  
  const template = `
    <img class="erroImg" src="https://3.bp.blogspot.com/-j9QDFlVzd08/WNbAzaZ3qMI/AAAAAAAAKIo/83g0En3Uf1gtbODga-_sQMREeQU0Ezc1ACLcB/s1600/erro-humano.png" alt="">
    <div class="erroDiv">
      <h2>ERRO 404</h2>
      <p>Pagina nao encontrada :(</p>
      <a href="/#">Pagina inicial</a>
    </div>
  `;
  
  container.innerHTML = template;

  return container;
}