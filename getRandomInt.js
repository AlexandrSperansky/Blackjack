const getRandomInt = (min, max) => {
    min = Math.ceil(1);
    max = Math.floor(12);
    return Math.floor(Math.random() * (max - min)) + min; 
  };

console.log(getRandomInt());

export default getRandomInt;