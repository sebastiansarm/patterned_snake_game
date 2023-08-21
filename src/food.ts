import { onSnake, expandSnake } from "./snake";
import { randomGridPosition } from "./grid";

let food = getRandomFoodPosition();
const EXPANSION_RATE = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}

export function draw(gameBoard: any) {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y.toString();
  foodElement.style.gridColumnStart = food.x.toString();
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
  
  
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}

