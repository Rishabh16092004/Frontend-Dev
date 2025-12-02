console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0); // macrotask

Promise.resolve()
       .then(() => console.log("Promise callback"));   // microtask

console.log("Script end");