import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

const getGameInfo = () => {
  const question = getRandomNumber(0, 500);
  const answer = isEven(question);

  return [question, answer];
};

export default () => playGame(gameDescription, getGameInfo);
