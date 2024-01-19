import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const getGameInfo = () => {
  const question = getRandomNumber(2, 25);
  let answer = 'yes';
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      answer = 'no';
    }
  }
  return [question, answer];
};

export default () => playGame(gameDescription, getGameInfo);
