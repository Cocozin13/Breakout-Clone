export default class InputHandler {

  constructor(paddle, game) {
    document.addEventListener('keydown', e => {;
      switch(e.keyCode) {
        case 37:
          paddle.moveLeft();
          break;

        case 39:
          paddle.moveRight()
          break;

          case 65:
          paddle.moveLeft();
          break;

        case 68:
          paddle.moveRight()
          break;

        case 32:
          game.togglePause()
          break;

          case 13: 
          game.start()
          break;
      }
    })

    document.addEventListener('keyup', e => {;
      switch(e.keyCode) {
        case 37:
          if (paddle.speed < 0) paddle.stop();
          break;
        case 39:
          if (paddle.speed > 0) paddle.stop()
          break;
          case 65:
            if (paddle.speed < 0) paddle.stop();
          break;
        case 68:
          if (paddle.speed > 0) paddle.stop();
          break;
      }
    })
  }
}