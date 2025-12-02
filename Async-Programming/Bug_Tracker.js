function getBugs() {
    return new Promise((resolve, reject) => {
        console.log("Fetching bugs from server...");

        setTimeout(() => {
            const apiFailed = Math.random() < 0.3;

            if (apiFailed) {
                reject("❌ API Error: Unable to fetch bug list.");
                return;
            }
            const bugs = ["UI glitch", "API timeout", "Login failure"];
            resolve(bugs);

        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.log("🐞 Bug List Retrieved Successfully:");
        console.table(bugs);
    })
    .catch(error => {
        console.log("⚠ Error:", error);
    });