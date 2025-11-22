class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    work() {
        console.log(this.name + " is working in the " + this.department + " department.");
    }
}
class Manager extends Employee {
    constructor(name, department) {
        super(name, department);
    }
    work() {
        console.log(this.name + " is managing the team in the " + this.department + " department.");
    }
}
var emp1 = new Employee("Rohit", "Sales");
var mgr1 = new Manager("Anita", "Marketing");
emp1.work();
mgr1.work();
