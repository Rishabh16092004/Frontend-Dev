function doStage(stageName, callback) {
    setTimeout(() => {
        console.log(stageName);
        callback();
    }, 1000);
}

function startPipelineWithCallbacks() {
    console.log("Starting pipeline (Callback Hell)...");

    doStage("🎨 Design", () => {
        doStage("🏗️ Build", () => {
            doStage("🧪 Test", () => {
                doStage("🚀 Deploy", () => {
                    doStage("🎉 Celebrate", () => {
                        console.log("Pipeline finished with callbacks!\n");
                    });
                });
            });
        });
    });
}

startPipelineWithCallbacks();

function stagePromise(stageName) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(stageName);
            resolve();
        }, 1000);
    });
}

async function startPipelineAsync() {
    console.log("Starting pipeline (Async/Await)...");

    await stagePromise("🎨 Design");
    await stagePromise("🏗️ Build");
    await stagePromise("🧪 Test");
    await stagePromise("🚀 Deploy");
    await stagePromise("🎉 Celebrate");

    console.log("Pipeline finished with async/await!\n");
}

setTimeout(() => {
    startPipelineAsync();
}, 6000);
