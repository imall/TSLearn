export class Department {
  protected readonly id: string;
  protected name: string;
  protected employees: string[] = [];

  constructor(id: string, n: string) {
    this.id = id;
    this.name = n;
  }

  // 這是縮寫，等同於上面的寫法
  // constructor(public name: string, private employees: string[] = []) {
  //   this.name = name;
  // }

  // private clg() {
  //   console.log("id" + this.id);
  //   console.log("name: " + this.name);
  //   console.log("employee: " + this.employees);
  // }

  // 這裡的 this 算是一種防衛，確保只有 Department 的實例才能用這個方法
  describe(this: Department): void {
    console.log("Department (" + this.id + "): " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

export class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

export class AccountingDepartment extends Department {
  private reports: string[];
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("沒有這東西哦");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("請輸入東西");
    }
    this.addReport(value);
  }

  constructor(id: string, reports: string[]) {
    super(id, "Accounting");
    this.reports = reports;
    this.lastReport = reports[0];
  }

  describe() {
    console.log(this.name);
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmployee(employee: string): void {
    if (employee === "Max") {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}
