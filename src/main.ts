import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake'
import { update as updateFood, draw as drawFood, } from './food'
import { outsideGrid } from './grid';

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board')!;


function main(currentTime: number) {
  if (gameOver) {
    if (confirm('You lost. Press ok to restart.')) {
      window.location.href = '/';
    }
    return
  }


  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  console.log("Render")  
  lastRenderTime = currentTime;

  update()
  draw()
  
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}