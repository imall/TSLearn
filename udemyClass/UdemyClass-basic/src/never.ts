const userName = "Max";
console.log(userName);
let age = 30;
age = 29;

const add1 = (...numbers: [number, number, number]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add1(5, 10, 2);
