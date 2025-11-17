"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {

    let value = apiData[i];
    let numericValue = Number(value);
    let booleanValue = Boolean(value);
    let stringValue = String(value);

    console.log(`Processing Value:`, value);
    console.log(`As Number :`, numericValue);
    console.log(`As Boolean:`, booleanValue);
    console.log(`As String :`, stringValue);


    if (Number.isNaN(numericValue)) {
        invalidNumbers.push(value);
        console.log("Invalid Number Detected");
    } else {
        validNumbers.push(numericValue);
        console.log("Valid Number Added");
    }
}


console.log("Valid Numbers:", validNumbers);
console.log("Invalid Numbers:", invalidNumbers);

console.log("\nDetailed Summary:");

for (let i = 0; i < apiData.length; i++) {
    let value = apiData[i];
    let num = Number(value);

    if (Number.isNaN(num)) {
        console.log(`'${value}' INVALID number`);
    } else {
        console.log(`'${value}' VALID number  ${num}`);
    }
}
