function serverResponse(serverName, delayTime) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (Math.random() < 0.25) {
                reject(`❌ ${serverName} failed during deployment.`);
                return;
            }

            resolve(`✔ ${serverName} responded after ${delayTime / 1000}s`);
        }, delayTime);
    });
}
const serverA = serverResponse("Server A", 2000);
const serverB = serverResponse("Server B", 3000);

Promise.race([serverA, serverB])
    .then(result => {
        console.log("⚡ Fastest response:", result);
    })
    .catch(error => {
        console.log("⚠ Race error:", error);
    });

Promise.all([serverA, serverB])
    .then(results => {
        console.log("\n🚀 Deployment completed for all servers!");
        console.log(results);
    })
    .catch(error => {
        console.log("\n❌ Deployment failed:", error);
    });