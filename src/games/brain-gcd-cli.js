import playGame, { getRandomNumber } from '../index.js';

const currentGameTutorial = 'Find the greatest common divisor of given numbers.';

export const getGameQuestionAndRightAnswer = () => {
  let firstNumber = getRandomNumber(1, 10);
  let secondNumber = getRandomNumber(1, 10);

  const gameQuestion = `${firstNumber} ${secondNumber}`;

  let rightAnswer;
  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
    rightAnswer = String(firstNumber + secondNumber);
  } return [gameQuestion, rightAnswer];
};

export default () => playGame(currentGameTutorial, getGameQuestionAndRightAnswer);
