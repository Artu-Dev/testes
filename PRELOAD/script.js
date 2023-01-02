const postContainer = document.querySelector('.posts-container');
const areas = document.querySelector('.main-area');

// funções

const getPosts = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = await res.json();
  return data;
}

const printPosts = async() => {
  const data = await getPosts();
  
  for(let i = 0; i < 100; i++){
    postContainer.innerHTML += `
      <div class="post">
        <div class="post-title-container">
          <img class="post-title-pfp" src="${data[i+1].thumbnailUrl}" alt="">
          <p>${data[i].title}</p>
        </div>
        <div class="post-image-container">
          <img class="post-image" src="https://thumbs.gfycat.com/CorruptOldfashionedGuineapig-max-1mb.gif" data="${data[i].url}" alt="placehoder.png">
        </div>
        <i class="fa-solid fa-heart hide"></i>
        <i class="fa-regular fa-heart"></i>
      </div>
    `;
  };
  lazyLoading()
  const postimage = document.querySelectorAll('.post-image');
  postimage.forEach((e) => {
    e.ondblclick = () => {
      console.log(e)
    }
  });
}
const lazyLoading = () => {
  const elementsList = document.querySelectorAll("[data]");
  elementsList.forEach((e) => {
    if(e.getBoundingClientRect().top < window.innerHeight + 250){ //  a primeira parte pega a distancia do elemento em relação ao topo da pagina
      e.src = e.getAttribute("data")
      e.removeAttribute("data")
    }
  })
};
areas.onscroll = () => {
  lazyLoading()
}

printPosts()
