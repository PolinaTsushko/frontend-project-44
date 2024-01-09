import playGame, { getRandomNumber } from './index.js';

const currentGameTutorial = 'What number is missing in the progression?';

export const getGameQuestionAndRightAnswer = () => {
  const arrayLength = 10;
  const array = [];
  const firstElementOfArray = getRandomNumber(1, 50);
  const stepOfProgression = 2;

  for (let i = 0; i < arrayLength; i += 1) {
    array.push(firstElementOfArray + i * stepOfProgression);
  }

  // const gameQuestion = array.join(' ');
  const hiddenElement = getRandomNumber(0, arrayLength - 1);
  const rightAnswer = String(array[hiddenElement]);
  array[hiddenElement] = '..';
  const gameQuestion = array.join(' ');

  return [gameQuestion, rightAnswer];
};

export default () => playGame(currentGameTutorial, getGameQuestionAndRightAnswer);
