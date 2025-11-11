// Different data types
let username = "Rishabh";        // string
let age = 21;                    // number
let isAdmin = false;             // boolean
let hobbies = ["coding", "music"]; // array
let address = { city: "Delhi", pin: 110001 }; // object
let score = null;                // null
let testValue;                   // undefined


function detectType(value) {
    if (Array.isArray(value)) return "array";
    if (value === null) return "null";
    return typeof value;
}


const report = [
    { label: "username", value: username, type: detectType(username) },
    { label: "age", value: age, type: detectType(age) },
    { label: "isAdmin", value: isAdmin, type: detectType(isAdmin) },
    { label: "hobbies", value: hobbies, type: detectType(hobbies) },
    { label: "address", value: address, type: detectType(address) },
    { label: "score", value: score, type: detectType(score) },
    { label: "testValue", value: testValue, type: detectType(testValue) }
];

console.table(report);
