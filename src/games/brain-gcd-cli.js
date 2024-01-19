/* eslint-disable no-param-reassign */
import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisorOfTwoNumbers = (first, second) => {
  while (first !== 0 && second !== 0) {
    if (first > second) {
      first -= second;
    } else (second -= first);
  }

  return first;
};

const getGameInfo = () => {
  const firstNumber = getRandomNumber(1, 12);
  const secondNumber = getRandomNumber(1, 12);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(greatestCommonDivisorOfTwoNumbers(firstNumber, secondNumber));

  return [question, answer];
};

export default () => playGame(gameDescription, getGameInfo);
