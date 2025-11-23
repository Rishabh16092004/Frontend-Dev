// Select buttons and body
const body = document.body;

// Theme button events
document.getElementById("lightBtn").addEventListener("click", function () {
    body.setAttribute("data-theme", "light");
});

document.getElementById("darkBtn").addEventListener("click", function () {
    body.setAttribute("data-theme", "dark");
});

document.getElementById("blueBtn").addEventListener("click", function () {
    body.setAttribute("data-theme", "blue");
});
