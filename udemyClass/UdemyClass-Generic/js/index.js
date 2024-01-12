"use strict";
const names = ["max", "michael", "john", "jane", "julie", "jack"];
const string = [];
const number = [];
const boolean = [];
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("This is done!");
    }, 2000);
});
// 必須確保 T 和 U 是物件，所以要 extends object
function merge(abj, aaa) {
    return Object.assign(abj, aaa);
}
function description(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(description("55555"));
const extracAndConver = (obj, key) => {
    return obj[key];
};
console.log(extracAndConver({ name: "Max" }, "name"));
class DataStorage {
    data = [];
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
const objStorage = new DataStorage();
objStorage.addItem({ name: "Max" });
objStorage.addItem({ name: "Manu" });
objStorage.removeItem({ name: "Max" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sS0FBSyxHQUFHLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUVsRSxNQUFNLE1BQU0sR0FBa0IsRUFBRSxDQUFDO0FBQ2pDLE1BQU0sTUFBTSxHQUFrQixFQUFFLENBQUM7QUFDakMsTUFBTSxPQUFPLEdBQW1CLEVBQUUsQ0FBQztBQUVuQyxNQUFNLE9BQU8sR0FBb0IsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtJQUN2RCxVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ2QsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNYLENBQUMsQ0FBQyxDQUFDO0FBRUgsb0NBQW9DO0FBQ3BDLFNBQVMsS0FBSyxDQUFxQyxHQUFNLEVBQUUsR0FBTTtJQUMvRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFNRCxTQUFTLFdBQVcsQ0FBb0IsT0FBVTtJQUNoRCxJQUFJLGVBQWUsR0FBRyxlQUFlLENBQUM7SUFDdEMsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN4QixlQUFlLEdBQUcsZ0JBQWdCLENBQUM7S0FDcEM7U0FBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzdCLGVBQWUsR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7S0FDMUQ7SUFFRCxPQUFPLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBRWxDLE1BQU0sZUFBZSxHQUFHLENBQ3RCLEdBQU0sRUFDTixHQUFNLEVBQ04sRUFBRTtJQUNGLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFFdEQsTUFBTSxXQUFXO0lBQ1AsSUFBSSxHQUFRLEVBQUUsQ0FBQztJQUN2QixPQUFPLENBQUMsSUFBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBTztRQUNoQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2xDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDRjtBQUVELE1BQU0sV0FBVyxHQUFHLElBQUksV0FBVyxFQUFVLENBQUM7QUFDOUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMzQixXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzVCLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUVwQyxNQUFNLGFBQWEsR0FBRyxJQUFJLFdBQVcsRUFBVSxDQUFDO0FBRWhELE1BQU0sVUFBVSxHQUFHLElBQUksV0FBVyxFQUFVLENBQUM7QUFFN0MsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3BDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUNyQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMifQ==