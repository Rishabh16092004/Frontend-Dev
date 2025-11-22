// Constructor function Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.showInfo = function () {
    console.log("Name: " + this.name + ", Age: " + this.age);
};
function Student(name, age, course) {
    Person.call(this, name, age);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showCourse = function () {
    console.log(this.name + " is enrolled in " + this.course);
};
var s1 = new Student("Rishabh", 21, "Computer Science");
s1.showInfo();
s1.showCourse();
