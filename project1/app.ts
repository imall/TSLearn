type IconFillColor = "primary" | "secondary";

export function getIconFillColor(color: IconFillColor): string {
  switch (color) {
    case "primary":
      return "blue";
    case "secondary":
      return "gray";
  }
}

const iconFillColors: Record<IconFillColor, string> = {
  primary: "blue",
  secondary: "gray",
};

let data = null;

iconFillColors["primary"];

let info: { name: string; age: number; hasPet: boolean; test: string | null } =
  {
    name: "Maxwell",
    age: 20,
    hasPet: false,
    test: "5555",
  };

info = {
  name: "imall",
  age: 21,
  hasPet: true,
  test: null,
};

let nestedObject = {
  prop: "Hello",
  child: {
    prop1: 123,
    prop2: false,
  },
};

let obj1 = { hello: "World" };
let obj2 = { ...obj1, goodbye: "Cruel World" };

console.log(obj2);

let obj3 = { hello: "Another World" };
let obj4 = Object.assign(obj3, {
  goodbye: "Cruel World",
});

const myElement = document.getElementById("myElement")!;
myElement.textContent = "新的文本內容";
myElement.classList.add("newClass");
