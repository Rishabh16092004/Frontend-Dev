$(document).ready(function () {

    $(".product").click(function () {
        $(".product").css("background-color", "");
        $(this).css("background-color", "#ffe5b4");

        if ($(this).attr("data-stock") === "out") {
            alert("This product is currently out of stock!");
        }
    });

    $(".product").hover(
        function () {
            $(this).find(".details").slideDown();
        },
        function () {
            $(this).find(".details").slideUp();
        }
    );

    $(".fav").click(function (event) {
        event.stopPropagation();
        $(this).toggleClass("selected");
    });

});
