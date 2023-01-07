const game = document.querySelector("#game");
const ctx = game.getContext('2d');

erro
let keys = {};
let gravity = 1;
let player;

// eventos

document.addEventListener('keydown', (e) =>{
  keys[e.code] = true
})
document.addEventListener('keyup', (e) => {
  keys[e.code] = false;
  keys = {}
})

// class

class Player {
  constructor(x, y, PlayerH, PlayerW, fs){
    Object.assign(this,{x, y, PlayerH, PlayerW, fs})
    
    this.dy = 0;
    this.jumpForce = 10;
    this.originalHeight = PlayerH;
    this.grounded = false;
    this.jumpTimer = 0; 

    setInterval(() => {
      Update()
      this.drawn()
      this.animate()
    }, 50);
}

  animate(){
    //pulo
    if(keys['Space'] || keys['KeyW']){
      this.jump()
    } else {
      this.jumpTimer = 0;
    }
    //agacha
    if(keys['ShiftLeft'] || keys['KeyS']){
      this.PlayerH = this.originalHeight/2;
      if(this.grounded){
        this.y = game.height - this.PlayerH;
      }
    } else {
      this.PlayerH = this.originalHeight;
    }

    this.y += this.dy

    // gravidade
    if(this.y + this.PlayerH < game.height){ // se o a posição Y mais a altura do player nao esta tocando o chao
      this.dy += gravity; // vai cair ate sair da condicional
      this.grounded = false;
    } else {
      this.dy = 0;
      this.grounded = true;
      this.y = game.height - (this.PlayerH); //a posição y vai ser a altura + playerH que resulta no chão
    }
    //this.drawn()
  }

  jump(){
    if(this.grounded && this.jumpTimer == 0){ // se ta encostando no chão e o jumpTimer esta zerado
      this.jumpTimer = 1;
      this.dy = this.jumpForce;
    } else if(this.jumpTimer > 0  && this.jumpTimer < 20){ // se o jumpTimer esta entre 0 e 20
      this.jumpTimer++ //incrementa o jumptimer enquano o botao de pulo estiver pressionado, se chegar a 20 ele vai sair da condição
      this.dy = -this.jumpForce - (this.jumpTimer/50)
    }
  }
  drawn(){
    ctx.beginPath();
    ctx.fillStyle = this.fs;
    ctx.fillRect(this.x, this.y, this.PlayerW, this.PlayerH);
    ctx.closePath();
  }
}

function Update(){
  ctx.clearRect(0, 0, game.width, game.height);
}
const teste = new Player(50, 0, 50, 40, '#000')