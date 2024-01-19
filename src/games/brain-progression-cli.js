import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

export const getGameInfo = () => {
  const ARRAY_LENGTH = 10;
  const array = [];
  const firstElementOfArray = getRandomNumber(1, 50);
  const PROGRESSION_STEP = 2;

  for (let i = 0; i < ARRAY_LENGTH; i += 1) {
    array.push(firstElementOfArray + i * PROGRESSION_STEP);
  }

  const hiddenElement = getRandomNumber(0, ARRAY_LENGTH - 1);
  const answer = String(array[hiddenElement]);
  array[hiddenElement] = '..';
  const question = array.join(' ');

  return [question, answer];
};

export default () => playGame(gameDescription, getGameInfo);
