let str = "45.67";
let num = parseFloat(str);

if (isNaN(num)) {
    console.log("Invalid number");
} else {
    console.log("Valid number:", num);
}
