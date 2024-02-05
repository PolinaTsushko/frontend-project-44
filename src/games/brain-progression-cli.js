import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const GAME_DESCRIPTION = 'What number is missing in the progression?';

const PROGRESSION_LENGTH = 10;
const PROGRESSION_STEP = 2;

const generateRandomProgression = () => {
  const firstElementOfProgression = getRandomNumber(1, 5);
  const sequence = [];
  const randomElement = getRandomNumber(0, PROGRESSION_LENGTH - 1);

  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    sequence.push(firstElementOfProgression + i * PROGRESSION_STEP);
  }

  return [sequence, randomElement];
};

const getGameInfo = () => {
  const [sequence, randomElement] = generateRandomProgression();
  const answer = String(sequence[randomElement]);
  sequence[randomElement] = '..';

  const question = String(sequence.join(' '));

  return [question, answer];
};

export default () => playGame(GAME_DESCRIPTION, getGameInfo);
