window.onload = function(){
  const stage = document.querySelector("#stage");
  const context = stage.getContext('2d');
  document.addEventListener('keydown', keyPush);
  setInterval(game, 80);

  const vel = 1; 
  let velX = velY = 0;
  let posX = posY = 10;
  let sizePiece = 5;
  let quantPiece = 20;
  let appleX = appleY = 5;

  let trail = [];
  tail = 5;

  var skin = ['rgb(0,255,0)','rgb(0,100,100)','rgb(100,150,0)','rgb(150,100,0)','rgb(200,255,0)']
  let c = 0;

  function game(){
    posX += velX;
    posY += velY;
    // X
    if(posX < 0) {posX = quantPiece -1;}
    if(posX > quantPiece -1) {posX = 0;}
    // Y
    if(posY < 0) {posY = quantPiece -1;}
    if(posY > quantPiece -1) {posY = 0;}


    context.fillStyle = "white";
    context.fillRect(0,0, stage.width, stage.height)
    
    context.fillStyle = 'red';
    context.fillRect(appleX*sizePiece, appleY*sizePiece, sizePiece,sizePiece);

    context.fillStyle = skin[c];
    for(let i = 0; i < trail.length; i++){
      context.fillRect(trail[i].x*sizePiece, trail[i].y*sizePiece, sizePiece,sizePiece);
      if(trail[i].x == posX && trail[i].y == posY){
        velX = velY = 0;
        tail = 5;
      }
    }
    trail.push({x:posX, y:posY });
    while(trail.length > tail) {
      trail.shift();
    }

    if(appleX == posX && appleY == posY) {
      tail++;
      c++
      if(c > 4){
        c = 0;
      }
      appleX = Math.floor(Math.random()* quantPiece);
      appleY = Math.floor(Math.random()* quantPiece);
    }
  }

  function keyPush(event){
    switch(event.keyCode || event){
      case 37: // left
        velX = - vel;
        velY = 0
        break;
      case 38: // up 
        velX = 0;
        velY = -vel;
        break;
      case 39: //right
        velX = vel;
        velY = 0;
        break;
      case 40: // down
        velX = 0;
        velY = vel;
        break;
    }
  }
  const up = document.getElementById("up");
  const left = document.getElementById("left");
  const right = document.getElementById("right");
  const down = document.getElementById("down");
  
  up.onclick = () => {
    velX = 0;
    velY = -vel;
  }
  left.onclick = () => {
    velX = - vel;
    velY = 0
  }
  right.onclick = () => {
    velX = vel;
    velY = 0;
  }
  down.onclick = () => {
    velX = 0;
    velY = vel;
  }
}