const getRandomNumber = (min = 0, max = 30) => Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandomNumber;
