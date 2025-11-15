let bonus = 5000;

function calculateSalary(isPermanent){
    let baseSalary = 40000;
    let totalSalary = baseSalary;

    if(isPermanent === true){
        totalSalary = baseSalary + bonus;
    }

    console.log("Employee Permanent:",isPermanent);
    console.log("Total Salary:",totalSalary);
}

console.log("GLOBAL bonus value before function calls:", bonus);

calculateSalary(true);

calculateSalary(false);

console.log("GLOBAL bonus value after function calls:", bonus);