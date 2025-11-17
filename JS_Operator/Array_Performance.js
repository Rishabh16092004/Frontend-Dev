let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

let highest = Math.max(...scores);
let lowest = Math.min(...scores);

let average = scores.reduce((sum, val) => sum + val, 0) / scores.length;

let passed = scores.filter(score => score >= 50).length;

let summary = `Array Performance Analyzer
--------------------------
Scores: ${scores.join(", ")}
Highest Score: ${highest}
Lowest Score: ${lowest}
Average Score: ${average.toFixed(2)}
Number of Students Passed (≥ 50): ${passed}`;

console.log(summary);
