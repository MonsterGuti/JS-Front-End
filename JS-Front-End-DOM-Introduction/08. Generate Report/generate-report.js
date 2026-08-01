function solve() {
    const checkboxes = document.querySelectorAll("thead input");
    const rows = document.querySelectorAll("tbody tr");
    const output = document.getElementById("output");

    let result = [];

    for (let row of rows) {
        let obj = {};
        let cells = row.querySelectorAll("td");

        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                let key = checkboxes[i].name;
                let value = cells[i].textContent;

                obj[key] = value;
            }
        }

        result.push(obj);
    }

    output.value = JSON.stringify(result, null, 2);
}