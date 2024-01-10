"use strict";
const botton = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2, showResult) {
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
const tupleExample = ["Hello", 123, true];
// const ADMIN = "ADMIN";
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["READ_ONLY"] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
let person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
console.log(person);
