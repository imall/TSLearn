"use strict";
// type Admin = {
//   name: string;
//   privileges: string[];
// };
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const fetchUserData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const json = await response.json();
        // 使用類型斷言，告訴 TypeScript 忽略可能的類型不匹配
        const fetchedUserData = json;
        console.log(fetchedUserData.job?.title);
    }
    catch (error) {
        console.error("發生錯誤:", error);
    }
};
fetchUserData();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCLEtBQUs7QUF1RUwsU0FBUyxHQUFHLENBQUMsQ0FBVSxFQUFFLENBQVU7SUFDakMsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQ2xELE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNwQztJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNmLENBQUM7QUFXRCxNQUFNLGFBQWEsR0FBRyxLQUFLLElBQUksRUFBRTtJQUMvQixJQUFJO1FBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQzFCLDhDQUE4QyxDQUMvQyxDQUFDO1FBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFbkMsa0NBQWtDO1FBQ2xDLE1BQU0sZUFBZSxHQUFhLElBQWdCLENBQUM7UUFFbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3pDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztLQUMvQjtBQUNILENBQUMsQ0FBQztBQUVGLGFBQWEsRUFBRSxDQUFDIn0=