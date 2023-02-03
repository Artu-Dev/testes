export default () => {
  const container = document.createElement('div');
  
  const template = `
    <img src="https://2.bp.blogspot.com/-EMfwyZNTpCM/VGvMPjppn_I/AAAAAAAAJt0/BxT5P5gBbGE/s1600/OS%2BTR%C3%8AS%2BEST%C3%81GIOS%2BDA%2BD%C3%9AVIDA.png" draggable="false" alt="">

    <div class="main-text">
      <h2>O que são SPA's?</h2>
      <p>
      Single page application (<span>SPA</span>) é um tipo de aplicação web que, como o nome sugere, carrega todo o conteúdo de uma única página. Em vez de fazer uma nova requisição ao servidor para cada ação do usuário, a <span>SPA</span> carrega os dados e os recursos de que precisa para funcionar em uma única página. Isso pode tornar a aplicação mais rápida e responsiva, pois os usuários não precisam esperar o carregamento de novas páginas toda vez que realizam uma ação. No entanto, isso também pode tornar o aplicativo mais complexo de desenvolver e manter.
      </p>
      <h3>Exemplo Pratico</h3>
      <p>Clique em <a href="/#about">About</a> ou <a href="/#contacts">Contacts</a> na barra de navegação e veja que o Header e o Footer nao serão atalizados, note tambem que a pagina nao atualizará</p>
    </div>
  `;
  
  container.innerHTML = template;

  return container;
}