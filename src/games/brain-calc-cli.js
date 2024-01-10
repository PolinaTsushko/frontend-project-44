import playGame, { getRandomNumber } from '../index.js';

const currentGameTutorial = 'What is the result of the expression?';

const mathSigns = ['+', '-', '*'];

export const getGameQuestionAndRightAnswer = () => {
  const firstNumber = getRandomNumber(0, 10);
  const secondNumber = getRandomNumber(0, 10);
  const mathSign = mathSigns[getRandomNumber(0, mathSigns.length - 1)];
  const gameQuestion = `${firstNumber} ${mathSign} ${secondNumber}`;

  let rightAnswer;
  if (mathSign === '+') {
    rightAnswer = String(firstNumber + secondNumber);
  } if (mathSign === '-') {
    rightAnswer = String(firstNumber - secondNumber);
  } if (mathSign === '*') {
    rightAnswer = String(firstNumber * secondNumber);
  }
  return [gameQuestion, rightAnswer];
};

export default () => playGame(currentGameTutorial, getGameQuestionAndRightAnswer);
