let x = 16.75;

let rounded = Math.round(x);
let squareRoot = Math.sqrt(x);
let power = Math.pow(x, 3);
let randomNum = Math.floor(Math.random() * 41) + 10;

let summary = `Math Utility Dashboard
               ----------------------
               Given Number: ${x}
               Rounded Value: ${rounded}
               Square Root: ${squareRoot}
               x³ Value: ${power}
               Random Number (10–50): ${randomNum}`;

console.log(summary);
