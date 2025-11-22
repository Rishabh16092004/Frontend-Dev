class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }
    deposit(amount) {
        this.#balance += amount;
        console.log("Deposited: ₹" + amount);
    }
    withdraw(amount) {
        if (amount > this.#balance) {
            throw new Error("Insufficient balance! Available: ₹" + this.#balance);
        }
        this.#balance -= amount;
        console.log("Withdrawn: ₹" + amount);
    }
    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(1000);

console.log("Initial Balance: ₹" + account.getBalance());
account.deposit(500);
console.log("Balance after deposit: ₹" + account.getBalance());
account.withdraw(300);
console.log("Balance after withdrawal: ₹" + account.getBalance());
try {
    account.withdraw(2000);
} catch (error) {
    console.log("Error: " + error.message);
}

console.log("Final Balance: ₹" + account.getBalance());
