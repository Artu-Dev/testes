export default () => {
  const container = document.createElement('div');
  
  const template = `
    <img src="https://static.wixstatic.com/media/3f643d_64a91ca6920a49ff95e0859162341d27~mv2.gif" draggable="false" alt="">
    <div class="main-text">
      <h2>Sobre</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maxime repudiandae aperiam nostrum exercitationem, eveniet voluptas placeat rem iste, voluptate eligendi libero et molestiae nesciunt! Consequatur harum at molestias atque.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maxime repudiandae aperiam nostrum exercitationem, eveniet voluptas placeat rem iste, voluptate eligendi libero et molestiae nesciunt! Consequatur harum at molestias atque.
      </p>
    </div>
  `;
  
  container.innerHTML = template;

  return container;
}