/* eslint-disable no-param-reassign */
import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (first, second) => {
  while (first !== 0 && second !== 0) {
    if (first > second) {
      first -= second;
    } else {
      second -= first;
    }
  }

  return first;
};

const getGameInfo = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(getGreatestCommonDivisor(firstNumber, secondNumber));

  return [question, answer];
};

export default () => playGame(GAME_DESCRIPTION, getGameInfo);
