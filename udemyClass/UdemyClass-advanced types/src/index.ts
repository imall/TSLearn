// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

// const e1: ElevatedEmployee = {
//   name: "Max",
//   privileges: ["create-server"],
//   startDate: new Date(),
// };

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

// let emp = {
//   id: "1",
//   startDate: new Date(),
// };

// // console.log("id" in emp);
// // console.log(Object.hasOwn(emp, "id"));

// // console.log("name" in emp);
// // console.log("valueOf" in emp);
// // console.log("toString" in emp);
// // console.log("hasOwnProperty" in emp);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log("Moving at speed: " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 10 });

// const $p = document.querySelector("p");
// // const $input = <HTMLInputElement>document.querySelector("input")!;
// const $input = document.querySelector("input") as HTMLInputElement;
// $input.value = "Hi there!";

// 方法多載

type combine = string | number;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: combine, b: combine) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

interface UserData {
  id: string;
  name: string;
  job: {
    title: string;
    description: string;
  };
}

const fetchUserData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const json = await response.json();

    // 使用類型斷言，告訴 TypeScript 忽略可能的類型不匹配
    const fetchedUserData: UserData = json as UserData;

    // job 可能是 undefined，所以要加上 ?，其實會抱錯的地方會是 undefined.title，fetchUserData.job 頂多就是噴 undefined 而已
    console.log(fetchedUserData.job?.title);
  } catch (error) {
    console.error("發生錯誤:", error);
  }
};

fetchUserData();

const userInput = undefined;
// ?? 會判斷左邊的值是否為 null 或 undefined，如果是的話就會回傳右邊的值，否則就回傳左邊的值
const storedData = userInput ?? "DEFAULT";
