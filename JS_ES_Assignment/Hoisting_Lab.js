//Original Code

//console.log(score);
//announce();
//var score = 50;
//function announce() { console.log("Game started"); }
//let status = "ready";
//startGame();
//function startGame() {
//console.log(status);
//}

//Why Original Code Fails

//Execution order:
//console.log(score) → prints undefined
//announce() works
//score = 50
//let status = "ready"
//startGame() executes
//Inside startGame → console.log(status)
//BUT status is in TDZ → ReferenceError

"use strict";

var score = 50;
function announce() {
    console.log("Game started");
}
let status = "ready";

function startGame() {
    console.log(status);
}
console.log(score);
announce();
startGame();
