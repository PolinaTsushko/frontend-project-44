import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

export const getGameInfo = () => {
  let firstNumber = getRandomNumber(1, 10);
  let secondNumber = getRandomNumber(1, 10);

  const question = `${firstNumber} ${secondNumber}`;

  let answer;
  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
    answer = String(firstNumber + secondNumber);
  } return [question, answer];
};

export default () => playGame(gameDescription, getGameInfo);
