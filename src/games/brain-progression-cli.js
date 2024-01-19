import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const PROGRESSION_LENGTH = 10;
const PROGRESSION_STEP = 2;

const generateRandomProgression = () => {
  const firstElementOfProgression = getRandomNumber(1, 5);
  const arrayOfNumbers = [];
  const randomElement = getRandomNumber(0, PROGRESSION_LENGTH - 1);

  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    arrayOfNumbers.push(firstElementOfProgression + i * PROGRESSION_STEP);
  }

  return [arrayOfNumbers, randomElement];
};

const getGameInfo = () => {
  const [arrayOfNumbers, randomElement] = generateRandomProgression();
  const answer = String(arrayOfNumbers[randomElement]);
  arrayOfNumbers[randomElement] = '..';

  const question = arrayOfNumbers.join(' ');

  return [question, answer];
};

export default () => playGame(gameDescription, getGameInfo);
