console.log("Start");

setTimeout(() => {
    console.log("Macrotask: setTimeout callback");
}, 0);
Promise.resolve()
    .then(() => {
        console.log("Microtask: Promise.then callback");
    });

console.log("Middle");
console.log("End");