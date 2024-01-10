const botton = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number, showResult?: boolean) {
  if (showResult) {
    console.log(num1 + num2);
  }
  return num1 + num2;
}

botton.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

const number1 = 5;
const number2 = 2.8;
const showresult = false;

const result = add(number1, number2);

const res = add(number1, number2, showresult);
console.log(result);

const arr = ["a", "b", 1];
const tupleExample: [string, number, boolean] = ["Hello", 123, true];

// const ADMIN = "ADMIN";
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = "READ_ONLY",
  AUTHOR = "AUTHOR",
}

let person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};
console.log(person);

// never 永遠不會有資料的情況，例如 throw error，或是無限迴圈
// unknown 有可能有資料，但是不知道是什麼資料
// any 有可能有資料，但是不知道是什麼資料，但是可以使用任何方法
