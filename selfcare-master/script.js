const image = document.querySelectorAll('.item')

image.forEach(function(e){
  const fav = e.querySelector('.favorite-icon');
  e.addEventListener('mousemove', function(){
    fav.classList.add('show');
  });
  e.addEventListener('mouseout', function(){
    fav.classList.remove('show');
  });
});