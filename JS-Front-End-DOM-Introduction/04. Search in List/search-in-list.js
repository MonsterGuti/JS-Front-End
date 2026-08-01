function solve() {
    const searchText = document.getElementById("searchText").value;
    const towns = document.querySelectorAll("#towns li");
    const result = document.getElementById("result");

    let matches = 0;

    for (const town of towns) {
        if (town.textContent.includes(searchText)) {
            town.style.fontWeight = "bold";
            town.style.textDecoration = "underline";
            matches++;
        } else {
            town.style.fontWeight = "normal";
            town.style.textDecoration = "";
        }
    }

    result.textContent = `${matches} matches found`;
}