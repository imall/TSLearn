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
