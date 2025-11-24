$(document).ready(function () {
    const existingEmails = ["test@gmail.com", "admin@yahoo.com", "sample@mail.com"];

    $("#registerBtn").click(function () {
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let pass = $("#password").val().trim();
        let isValid = true;

        $("input").removeClass("invalid");
        $("#message").removeClass("success errorMsg").text("");

        if (name === "") {
            $("#name").addClass("invalid");
            isValid = false;
        }
        let emailPattern = /\S+@\S+\.\S+/;

        if (!emailPattern.test(email)) {
            $("#email").addClass("invalid");
            isValid = false;
        } else if (existingEmails.includes(email)) {
            $("#email").addClass("invalid");
            $("#message").addClass("errorMsg").text("Email already exists!");
            isValid = false;
        }
        if (pass.length < 8) {
            $("#password").addClass("invalid");
            isValid = false;
        }
        if (isValid) {
            $("#message").addClass("success").text("Registration Successful!");
        } else {
            $("#message").addClass("errorMsg").text("Please correct highlighted fields.");
        }
    });

});
