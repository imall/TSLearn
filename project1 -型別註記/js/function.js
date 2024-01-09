"use strict";
function CreateCustomer(name, age) {
    return {
        name,
        age,
    };
}
function GetBookByTitle(title = "Vue Book") {
    if (title === "test")
        return "test";
    return Math.floor(Math.random() * 5) + 1;
}
function GetPopulorBook(title = GetMostPopularBook()) {
    if (title === "test")
        return "test";
    return Math.floor(Math.random() * 5) + 1;
}
function GetMostPopularBook() {
    return "Vue Book";
}
// 如果是 rest 參數，資料型別是陣列，而且只能有一個，而且必須是最後一個參數
function GetBooksReadForCust(name, ...bookIDs) {
    console.warn(name, bookIDs);
    return ["Vue Book"];
}
const GetReview = (title) => {
    if (title === "test")
        return "test";
    return Math.floor(Math.random() * 5) + 1;
};
function PrintMovieInfo(author) {
    return ["Vue Book"];
}
// // 註記為 object，只能接受 object 類型的值
// let justAnObject: object = {
//   hello: "World",
// };
// justAnObject = {
//   goodbye: "W",
// };
// justAnObject = [];
// justAnObject = function () {};
// justAnObject = new Map();
// justAnObject = new String("test");
// justAnObject = ";;;;";
// justAnObject = 123;
// justAnObject = null;
// justAnObject.app = "test"; // 會報錯
// justAnObject.hello = "test";
// // 函式的複寫
// let addition = function (p: number, q: number) {
//   return p + q;
// };
// addition = function (a: number, b: number) {
//   return a + b;
// };
// // 型別錯誤
// addition = function (a: string, b: string): string {
//   return "666";
// };
// // 回傳值錯誤
// addition = function (p: number, q: number) {
//   p + q;
// };
