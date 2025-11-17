"use strict";

const transactions = [{ id: 1, amount: 2000 },{ id: 2, amount: -500 },{ id: 3 },null];

let valid = [];
let invalid = [];

for (let t of transactions) {
    try {
        if (t === null) throw new Error("Null transaction");
        if (!("id" in t) || !("amount" in t)) throw new Error("Missing fields");
        if (t.amount < 0) throw new Error("Negative amount");

        valid.push(t);
    } catch (err) {
        invalid.push({ transaction: t, error: err.message });
    }
}

console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log("Success Count:", valid.length);
console.log("Failed Count:", invalid.length);
