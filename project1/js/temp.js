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
    test: null,
};
