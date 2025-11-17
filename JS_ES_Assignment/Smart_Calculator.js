"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25
const num2 = 0;

function calculate(op, a, b) {
    switch (op) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "divide":
            if (b === 0) throw new Error("DivideByZeroError");
            return a / b;
        case "power":
            return a ** b;
        case "root":
            if (a < 0) throw new Error("NegativeRootError");
            return Math.sqrt(a);
        default:
            throw new Error("InvalidOperationError");
    }
}

console.log("Smart Calculator Summary\n");

for (let op of operations) {
    try {
        const result = calculate(op, num1, num2);
        console.log(`${op.toUpperCase()} → Result: ${result}`);
    } catch (err) {
        console.log(`${op.toUpperCase()} → Error: ${err.message}`);
    }
}
