import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const getGameInfo = () => {
  const question = getRandomNumber(2, 25);
  const answer = isPrime(question);

  return [question, answer];
};

export default () => playGame(gameDescription, getGameInfo);
