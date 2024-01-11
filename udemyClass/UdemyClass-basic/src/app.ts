import {
  AccountingDepartment,
  ITDepartment,
  Department,
} from "./Department.js";

const accounting = new Department("666", "Accountingggggg");
accounting.describe();

// 這感覺就像把人家的方法抓來用，但是人家的方法原本是依賴自家的 name
// 如果自己沒有 name 就可能會錯
// 上面方法寫了 this 之後，就必須確保這個物件是 Department 的實例 (擁有 name)
// const accountingCopy = {name:'appp', describe: accounting.describe };

// accountingCopy.describe();

accounting.describe();
accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.describe();

const it = new ITDepartment("888", ["Max"]);

it.addEmployee("Max");

const accounting2 = new AccountingDepartment("999", []);
accounting2.mostRecentReport = "vue is awesome";

console.log(accounting2.mostRecentReport);
accounting2.printReports();
