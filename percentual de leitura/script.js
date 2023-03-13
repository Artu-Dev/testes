const postWrap = document.querySelector('.post-wrap');
let bar = document.createElement('div');  

function createBar() {
  bar.style.height = "4px";
  bar.style.width = "4px";
  bar.style.backgroundColor = "#6633cc";
  bar.style.position = "fixed";
  bar.style.top = "0";
  bar.style.left = "0";
  bar.style.zIndex = "99";
  bar.style.transition = "ease 0.2s";
  
  document.body.append(bar);
  
}

function updateBar() {
  const textHeight = postWrap.offsetHeight;
  const pagePositionY = window.pageYOffset;
  
  // regra de 3
  const updatedBar = Math.floor(pagePositionY * 100 / textHeight);
  if(updatedBar > 100) updatedBar = 100;
  console.log(updatedBar);

  bar.style.width = updatedBar +"%";
}

window.addEventListener("load", () => {
  document.addEventListener('scroll', updateBar)
  createBar(); 
})