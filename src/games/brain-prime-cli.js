import playGame, { getRandomNumber } from '../index.js';

const currentGameTutorial = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const getGameQuestionAndRightAnswer = () => {
  const gameQuestion = getRandomNumber(2, 25);
  let rightAnswer = 'yes';
  for (let i = 2; i < gameQuestion; i += 1) {
    if (gameQuestion % i === 0) {
      rightAnswer = 'no';
    }
  }
  return [gameQuestion, rightAnswer];
};

export default () => playGame(currentGameTutorial, getGameQuestionAndRightAnswer);
