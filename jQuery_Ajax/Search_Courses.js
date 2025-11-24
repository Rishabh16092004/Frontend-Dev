$(document).ready(function () {

    $("#searchBox").keyup(function () {
        let searchValue = $(this).val().toLowerCase();
        let matchCount = 0;
        $(".course").each(function () {
            $(this).html($(this).text());
        });

        $(".course").each(function () {
            let courseText = $(this).text().toLowerCase();
            if (courseText.includes(searchValue) && searchValue !== "") {
                let original = $(this).text();
                let regex = new RegExp(searchValue, "ig");
                let highlighted = original.replace(regex, match => `<span class="highlight">${match}</span>`);
                $(this).html(highlighted);
                $(this).show();
                matchCount++;
            } else if (searchValue === "") {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
        $("#countMsg").text(`Matched Courses: ${matchCount}`);
    });

});
