export default class Paddle {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.width = 350;
    this.height = 15;

    this.maxSpeed = 8;
    this.speed = 0;

    this.position = {
      x: game.gameWidth / 2 - 175,
      y: game.gameHeight - this.height -10,
    }
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0
  }

  draw(ctx) {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height )
  }

  update(deltaTime) {
    
    this.position.x += this.speed;

    if(this.position.x < 0) this.position.x = 0;

    if (this.position.x + this.width > this.gameWidth)
    this.position.x = this.gameWidth - this.width;
   
  }
}