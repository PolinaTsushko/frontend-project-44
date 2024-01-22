import playGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const GAME_DESCRIPTION = 'What number is missing in the progression?';

const PROGRESSION_LENGTH = 10;
const PROGRESSION_STEP = 2;

const generateRandomProgression = () => {
  const firstElementOfProgression = getRandomNumber(1, 5);
  const numbers = [];
  const randomElement = getRandomNumber(0, PROGRESSION_LENGTH);

  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    numbers.push(firstElementOfProgression + i * PROGRESSION_STEP);
  }

  return [numbers, randomElement];
};

const getGameInfo = () => {
  const [numbers, randomElement] = generateRandomProgression();
  const answer = String(numbers[randomElement]);
  numbers[randomElement] = '..';

  const question = String(numbers.join(' '));

  return [question, answer];
};

export default () => playGame(GAME_DESCRIPTION, getGameInfo);
