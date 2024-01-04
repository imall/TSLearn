"use strict";
const GetReview = (title) => {
    if (title === "test")
        return "test";
    return Math.floor(Math.random() * 5) + 1;
};
let movieReview = GetReview("te8888st");
console.warn(movieReview);
