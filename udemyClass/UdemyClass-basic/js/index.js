"use strict";
const app = "ks666";
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2, showResult) {
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
document.querySelector("button").addEventListener("click", fun);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQztBQUVwQixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBRSxDQUFDO0FBQ2pELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFzQixDQUFDO0FBQ3BFLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFzQixDQUFDO0FBRXBFLFNBQVMsR0FBRyxDQUFDLElBQVksRUFBRSxJQUFZLEVBQUUsVUFBb0I7SUFDM0QsSUFBSSxVQUFVLEVBQUU7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztLQUMxQjtJQUNELE9BQU8sSUFBSSxHQUFHLElBQUksQ0FBQztBQUNyQixDQUFDO0FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNqRCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNsQixNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUM7QUFDcEIsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFdkIsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFO0lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQixDQUFDLENBQUM7QUFFRixRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBRSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztBQUVqRSx3Q0FBd0M7QUFFeEMsb0RBQW9EO0FBQ3BELHVCQUF1QjtBQUV2Qiw2QkFBNkI7QUFDN0Isd0VBQXdFO0FBRXhFLHdCQUF3QjtBQUN4Qix1QkFBdUI7QUFDdkIsb0JBQW9CO0FBRXBCLG9CQUFvQjtBQUVwQiwyQkFBMkIifQ==