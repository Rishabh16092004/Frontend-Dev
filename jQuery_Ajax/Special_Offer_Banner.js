$(document).ready(function () {

    $("#hideBtn").click(function () {
        $(".banner").hide();
    });

    $("#showBtn").click(function () {
        $(".banner").show();
    });

    $("#slideBtn").click(function () {
        $(".banner").slideToggle();
    });

    $("#fadeBtn").click(function () {
        $(".banner").fadeToggle();
    });

    let index = 0;
    const banners = $(".banner");

    function rotateBanners() {
        banners.fadeOut(500);
        $(banners[index]).fadeIn(500);

        index++;
        if (index >= banners.length) index = 0;
    }

    rotateBanners();
    setInterval(rotateBanners, 5000);

});
