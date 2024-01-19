import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const MATH_SIGNS = ['+', '-', '*'];

export const getGameInfo = () => {
  const firstNumber = getRandomNumber(0, 10);
  const secondNumber = getRandomNumber(0, 10);
  const mathSign = MATH_SIGNS[getRandomNumber(0, MATH_SIGNS.length - 1)];
  const question = `${firstNumber} ${mathSign} ${secondNumber}`;

  let answer;
  if (mathSign === '+') {
    answer = String(firstNumber + secondNumber);
  } if (mathSign === '-') {
    answer = String(firstNumber - secondNumber);
  } if (mathSign === '*') {
    answer = String(firstNumber * secondNumber);
  }
  return [question, answer];
};

export default () => playGame(gameDescription, getGameInfo);
