import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const GAME_DESCRIPTION = 'What is the result of the expression?';

const MATH_SIGNS = ['+', '-', '*'];

const calculate = (first, second, operation) => {
  switch (operation) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    default:
      throw new Error(`Unexpected sign ${operation}`);
  }
};

const getGameInfo = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const mathSign = MATH_SIGNS[getRandomNumber(0, MATH_SIGNS.length - 1)];

  const question = `${firstNumber} ${mathSign} ${secondNumber}`;
  const answer = String(calculate(firstNumber, secondNumber, mathSign));

  return [question, answer];
};

export default () => playGame(GAME_DESCRIPTION, getGameInfo);
