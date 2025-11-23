const searchInput = document.getElementById("searchInput");
const tableBody = document.getElementById("tableBody");
const noResultMsg = document.getElementById("noResultMsg");

// Listen to input event for real-time search
searchInput.addEventListener("input", function () {
    const filterText = searchInput.value.toLowerCase();
    let visibleCount = 0;

    const rows = tableBody.querySelectorAll("tr");

    rows.forEach(row => {
        const rowText = row.textContent.toLowerCase(); // combine name, branch, cgpa

        if (rowText.includes(filterText)) {
            row.style.display = "";
            visibleCount++;
        } else {
            row.style.display = "none";
        }
    });

    // Show "No results found" if no row is visible
    if (visibleCount === 0) {
        noResultMsg.classList.remove("hidden");
    } else {
        noResultMsg.classList.add("hidden");
    }
});
