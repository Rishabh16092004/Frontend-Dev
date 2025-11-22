class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    display(){
        console.log(`Name: ${this.name}`);
    }
    calculateAverage() {
        const sum = this.marks.reduce((acc, val) => acc + val, 0);
        console.log("Average:",sum/this.marks.length);
    }
    getGrade() {
        const avg = this.calculateAverage();

        if (avg >= 85) console.log("Grade A");
        else if (avg >= 70) console.log("Grade B");
        else if (avg >= 50) console.log("Grade C");
        else console.log("Grade F");
    }
}

const s1 = new Student("Rishabh", [85, 90, 78, 88]);
const s2 = new Student("Aman", [60, 55, 65, 58]);
const s3 = new Student("Priya", [45, 50, 40, 35]);
s1.display();
s1.getGrade();
s2.display();
s2.getGrade();
s3.display();
s3.getGrade();
