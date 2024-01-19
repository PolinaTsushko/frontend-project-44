import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getGameInfo = () => {
  const question = getRandomNumber(0, 500);
  let answer;
  if (question % 2 === 0) {
    answer = 'yes';
  } if (question % 2 !== 0) {
    answer = 'no';
  }
  return [question, answer];
};

export default () => playGame(gameDescription, getGameInfo);
