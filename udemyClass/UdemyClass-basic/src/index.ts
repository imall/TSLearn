const app = "ks666";

const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number, showResult?: boolean) {
  if (showResult) {
    console.log(num1 + num2);
  }
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

const number1 = 5;
const number2 = 2.8;
const showresult = false;
console.log("6568866");

const fun = () => {
  console.log("fun");
};

document.querySelector("button")!.addEventListener("click", fun);

// const result = add(number1, number2);

// // const res = add(number1, number2, showresult);
// console.log(result);

// const arr = ["a", "b", 1];
// const tupleExample: [string, number, boolean] = ["Hello", 123, true];

// const ADMIN = "ADMI";
// const READ_ONLY = 1;
// const AUTHOR = 2;

// console.log(app);

// console.log("testtttt");
