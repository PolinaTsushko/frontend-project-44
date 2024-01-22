import playGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const GAME_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }

  return false;
};

const getGameInfo = () => {
  const question = getRandomNumber(0, 500);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => playGame(GAME_DESCRIPTION, getGameInfo);
