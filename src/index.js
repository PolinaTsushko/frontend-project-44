import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export { getRandomNumber };

const roundAmount = 3;

const playGame = (currentGameTutorial, getGameQuestionAndRightAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${currentGameTutorial}`);

  for (let i = 0; i < roundAmount; i += 1) {
    const [gameQuestion, rightAnswer] = getGameQuestionAndRightAnswer();
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
        Let's try again, ${userName}!`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulations, ${userName}!`);
};

export default playGame;
