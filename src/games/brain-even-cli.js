import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const currentGameTutorial = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getGameQuestionAndRightAnswer = () => {
  const gameQuestion = getRandomNumber(0, 500);
  let rightAnswer;
  if (gameQuestion % 2 === 0) {
    rightAnswer = 'yes';
  } if (gameQuestion % 2 !== 0) {
    rightAnswer = 'no';
  }
  return [gameQuestion, rightAnswer];
};

export default () => playGame(currentGameTutorial, getGameQuestionAndRightAnswer);
