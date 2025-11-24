$(document).ready(function () {

    let time = new Date().getHours();
    let message = "";

    if (time < 12) {
        message = "Good Morning!";
    } else if (time < 18) {
        message = "Good Afternoon!";
    } else {
        message = "Good Evening!";
    }

    $("#greeting").text(message);
    $("#changeGreetingBtn").click(function () {
        $("#greeting").text("Believe in yourself — you can achieve anything!");
    });
    $("#toggleMsgBtn").click(function () {
        $("#welcomeMsg").toggle();
    });
    $("#greeting").click(function () {
        alert("You clicked on the greeting!");
    });

});
