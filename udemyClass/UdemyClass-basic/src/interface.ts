// 基本的 interface
interface Person {
  name: string;
  age: number;

  greet(phrace: string): void;
}

let person: Person = {
  name: "這是新溝頓",
  age: 18,
  greet(phrace: string) {
    console.log(phrace);
  },
};

// interface 也可以宣告 readonly，這樣即便 class 實現後 ，不用特別宣告也是 readonly
interface Named {
  readonly name: string;
}

// interface 可以繼承 interface 而且可以多個
interface Greetable extends Named {
  greet(phrace: string): void;
}

class Person implements Greetable {
  name: string;
  age: number = 18;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrace: string) {
    console.log(phrace);
  }
}

class Dog implements Greetable {
  name: string;
  age: number = 18;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrace: string) {
    console.log(phrace + "汪汪");
  }
}

let user1: Greetable = new Person("這是新溝頓");
let dog: Greetable = new Dog("這是新溝頓");
const greet = (user: Greetable) => {
  console.log(user.name);
  user.greet("我很會 Greet 哦");
};

greet(user1);

greet(dog);

interface AddFn {
  (a: number, b: number): number;
}

let add5: AddFn = (a, b) => {
  return a + b;
};

// interface 本身不會被編譯，只是用來檢查
