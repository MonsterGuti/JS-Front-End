function solve() {
    const searchText = document.getElementById("searchField").value;
    const rows = document.querySelectorAll("tbody tr");

    for (const row of rows) {
        row.classList.remove("select");

        if (row.textContent.includes(searchText) && searchText !== "") {
            row.classList.add("select");
        }
    }
}