function greetUser(name, callback) {
    console.log("Hello " + name);
    callback();
}
function showEndMessage() {
    console.log("Welcome to the GLA!");
}
greetUser("Rishabh", showEndMessage);
