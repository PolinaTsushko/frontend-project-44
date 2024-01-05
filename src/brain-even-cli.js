import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (randomNumber % 2 === 0 && userAnswer !== 'yes') {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'yes'.
        Let's try again, ${userName}!`);
      return;
    }
    if (randomNumber % 2 !== 0 && userAnswer !== 'no') {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'no'.
        Let's try again, ${userName}!`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulations, ${userName}!`);
};
