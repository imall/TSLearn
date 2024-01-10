// 使用 type 合併型別
type Person = { name: string; age: number };
type Employee = { job: string };

type EmployeePerson = Person & Employee; // 交叉型別

// 使用 interface 擴充介面
interface IPerson {
  name: string;
  age: number;
}

interface IEmployee extends IPerson {
  job: string;
}

// interface Add {
//   (a: number, b: number): number;
//   (a: string, b: string): string;
// }

const impliment = (c: number, d: number) => c + d;

function GetReview(title: string): string | number {
  if (title === "a") {
    return 1;
  }
  return "a";
}

function PrintMovieInfo(title: string, yearReleased?: number): void {
  console.log(title);
  console.log(yearReleased);
}

PrintMovieInfo("55455");
