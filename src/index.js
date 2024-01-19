import readlineSync from 'readline-sync';

const ROUND_COUNT = 3;

const playGame = (gameDescription, getGameInfo) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log(`${gameDescription}`);

  for (let i = 0; i < ROUND_COUNT; i += 1) {
    const [question, answer] = getGameInfo();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. Let's try again, ${userName}!`);

      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
