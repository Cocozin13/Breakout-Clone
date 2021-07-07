import {detectCollision} from '../src/colisionDetection.js'

export default class Ball {

  constructor(game) {
    this.image = document.getElementById('ball');

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;
    this.size = 25;
    this.reset();
  }

  reset() {
    this.position = {x: 10, y: 10};
    this.speed = {x: 5, y: 5};
  }
  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);

  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;


    //parede da direita ou da esquerda
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }


    //parede de cima 
    if (this.position.y < 0) {
      this.speed.y = -this.speed.y;
    } 

    //parede de baixo
    if (this.position.y + this.size > this.gameHeight) {
      this.game.lives--;
      this.reset();
    }
    
    if(detectCollision(this, this.game.paddle)) {
      this.speed.y =  -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
