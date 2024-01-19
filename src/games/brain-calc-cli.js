import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const MATH_SIGNS = ['+', '-', '*'];

const getCalculationResult = (first, second, operation) => {
  if (operation === '+') {
    return first + second;
  }
  if (operation === '-') {
    return first - second;
  }
  if (operation === '*') {
    return first * second;
  }

  return false;
};

const getGameInfo = () => {
  const firstNumber = getRandomNumber(0, 10);
  const secondNumber = getRandomNumber(0, 10);
  const mathSign = MATH_SIGNS[getRandomNumber(0, MATH_SIGNS.length - 1)];

  const question = `${firstNumber} ${mathSign} ${secondNumber}`;
  const answer = String(getCalculationResult(firstNumber, secondNumber, mathSign));

  return [question, answer];
};

export default () => playGame(gameDescription, getGameInfo);
