function delay() {
    const time = Math.floor(Math.random() * 1000) + 1000; // 1000–2000 ms
    return new Promise(resolve => setTimeout(resolve, time));
}

// Function 1: Boil water
function boilWater() {
    return new Promise(async (resolve, reject) => {
        console.log("Step 1: Boiling water...");

        await delay();

        if (Math.random() < 0.2) {
            reject("Water heating system failed!");
            return;
        }

        console.log("Water boiled.");
        resolve("Boiled water");
    });
}

// Function 2: Brew coffee
function brewCoffee() {
    return new Promise(async (resolve, reject) => {
        console.log("Step 2: Brewing coffee...");

        await delay();

        if (Math.random() < 0.2) {
            reject("Coffee machine malfunction!");
            return;
        }

        console.log("Coffee brewed.");
        resolve("Brewed coffee");
    });
}

// Function 3: Pour into cup
function pourCoffee() {
    return new Promise(async (resolve, reject) => {
        console.log("Step 3: Pouring coffee into cup...");

        await delay();

        if (Math.random() < 0.2) {
            reject("Cup slipped! Coffee spilled!");
            return;
        }

        console.log("Coffee poured into the cup.");
        resolve("Coffee ready");
    });
}

// ---- Promise Chaining ----
boilWater()
    .then(result => {
        return brewCoffee();
    })
    .then(result => {
        return pourCoffee();
    })
    .then(result => {
        console.log("🎉 Coffee ready for the team!");
    })
    .catch(error => {
        console.log("⚠ Process failed:", error);
    });
