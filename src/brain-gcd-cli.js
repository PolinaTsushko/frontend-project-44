import playGame, { getRandomNumber } from './index.js';

const currentGameTutorial = 'Find the greatest common divisor of given numbers.';

export const getGameQuestionAndRightAnswer = () => {
  let firstNumber = getRandomNumber(0, 500);
  let secondNumber = getRandomNumber(0, 500);

  const gameQuestion = `${firstNumber} ${secondNumber}`;

  let rightAnswer;
  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber = firstNumber % secondNumber;
    } else {
      secondNumber = secondNumber % firstNumber;
    }
    rightAnswer = String(firstNumber + secondNumber);
  } return [gameQuestion, rightAnswer];
};

export default () => playGame(currentGameTutorial, getGameQuestionAndRightAnswer);
