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
