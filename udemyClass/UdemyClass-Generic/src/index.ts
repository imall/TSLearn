const names = ["max", "michael", "john", "jane", "julie", "jack"];

const string: Array<string> = [];
const number: Array<number> = [];
const boolean: Array<boolean> = [];

const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

// 必須確保 T 和 U 是物件，所以要 extends object
function merge<T extends object, U extends object>(abj: T, aaa: U) {
  return Object.assign(abj, aaa);
}

interface Lengthy {
  length: number;
}

function description<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }

  return [element, descriptionText];
}

console.log(description("55555"));

const extracAndConver = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return obj[key];
};

console.log(extracAndConver({ name: "Max" }, "name"));

class DataStorage<T> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

const objStorage = new DataStorage<object>();

objStorage.addItem({ name: "Max" });
objStorage.addItem({ name: "Manu" });
objStorage.removeItem({ name: "Max" });
