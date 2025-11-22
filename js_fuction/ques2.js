function applyOperation(numbers, operation) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(operation(numbers[i]));
    }
    return result;
}
function double(num) {
    return num * 2;
}
function square(num) {
    return num * num;
}
const numbers = [1, 2, 3, 4];

console.log("Original Array:", numbers);
console.log("Doubled:", applyOperation(numbers, double));
console.log("Squared:", applyOperation(numbers, square));
