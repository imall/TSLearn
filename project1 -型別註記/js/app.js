"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIconFillColor = void 0;
function getIconFillColor(color) {
    switch (color) {
        case "primary":
            return "blue";
        case "secondary":
            return "gray";
    }
}
exports.getIconFillColor = getIconFillColor;
const iconFillColors = {
    primary: "blue",
    secondary: "gray",
};
let data = null;
iconFillColors["primary"];
let info = {
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
let obj2 = Object.assign(Object.assign({}, obj1), { goodbye: "Cruel World" });
console.log(obj2);
let obj3 = { hello: "Another World" };
let obj4 = Object.assign(obj3, {
    goodbye: "Cruel World",
});
if (typeof document !== "undefined") {
    const myElement = document.getElementById("myElement");
    myElement.textContent = "新的文本內容";
    myElement.classList.add("newClass");
}
let oj = [
    { message: "Hello" },
    { message: "World", data: 123 },
    { message: "!" },
];
let oj1 = [{ message: "Hello" }, { message: "World" }, { message: "!" }];
let oj2 = [{ message: "Hello" }, { message: 1111111 }, { message: "!" }];
let misc = [
    [1, 2, 3],
    ["hello", "world"],
    [true, false, 123, true],
    ["string", undefined],
    [{ message: "hello" }, { message: "world" }],
];
let canBeEitherNullOrNumbers = [1, 2, 4];
canBeEitherNullOrNumbers.splice(2, 0, null);
let powerOp = function (r, w) {
    return r ** w;
};
function printInfo(info) {
    console.log(info.name);
    console.log(info.age);
    console.log(info.hasPet);
}
let info2 = {
    name: "Maxwell",
    age: 20,
    hasPet: false,
    hello: "world",
};
printInfo(info2);
let account = {
    id: 1,
    isEmployee: true,
    name: "Maxwell",
    birthDate: new Date(),
};
let accountq = {
    account: "account",
    password: "password",
    subscribe: true,
};
// nerver 是所有型別的子型別
function assertNever(value) {
    throw new Error(`Unexpected value: ${value}`);
}
function processValue(val) {
    if (typeof val === "string") {
        // val 在这里的类型被缩小为 string
        console.log(val.toUpperCase());
    }
    else if (typeof val === "number") {
        // val 在这里的类型被缩小为 number
        console.log(val.toFixed(2));
    }
    else {
        // 如果 val 不是 string 也不是 number，这就是一个永远不会发生的情况
        assertNever(val);
    }
}
