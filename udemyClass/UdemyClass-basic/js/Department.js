export class Department {
    id;
    name;
    employees = [];
    constructor(id, n) {
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
    describe() {
        console.log("Department (" + this.id + "): " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
export class ITDepartment extends Department {
    admins;
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT Department - ID: " + this.id);
    }
}
export class AccountingDepartment extends Department {
    reports;
    lastReport;
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("沒有這東西哦");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("請輸入東西");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    describe() {
        console.log(this.name);
        console.log("Accounting Department - ID: " + this.id);
    }
    addEmployee(employee) {
        if (employee === "Max") {
            return;
        }
        this.employees.push(employee);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVwYXJ0bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9EZXBhcnRtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxVQUFVO0lBQ0YsRUFBRSxDQUFTO0lBQ3BCLElBQUksQ0FBUztJQUNiLFNBQVMsR0FBYSxFQUFFLENBQUM7SUFFbkMsWUFBWSxFQUFVLEVBQUUsQ0FBUztRQUMvQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsdUVBQXVFO0lBQ3ZFLHNCQUFzQjtJQUN0QixJQUFJO0lBRUosa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyx1Q0FBdUM7SUFDdkMsZ0RBQWdEO0lBQ2hELElBQUk7SUFFSiw2Q0FBNkM7SUFDN0MsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQWdCO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxZQUFhLFNBQVEsVUFBVTtJQUMxQyxNQUFNLENBQVc7SUFDakIsWUFBWSxFQUFVLEVBQUUsTUFBZ0I7UUFDdEMsS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxVQUFVO0lBQzFDLE9BQU8sQ0FBVztJQUNsQixVQUFVLENBQVM7SUFFM0IsSUFBSSxnQkFBZ0I7UUFDbEIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUN4QjtRQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksZ0JBQWdCLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELFlBQVksRUFBVSxFQUFFLE9BQWlCO1FBQ3ZDLEtBQUssQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQWdCO1FBQzFCLElBQUksUUFBUSxLQUFLLEtBQUssRUFBRTtZQUN0QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsU0FBUyxDQUFDLElBQVk7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVELFlBQVk7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0YifQ==