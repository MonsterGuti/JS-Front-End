function solve() {
    const input = Number(document.getElementById("input").value);
    const option = document.getElementById("selectMenuTo").value;
    const result = document.getElementById("result");

    if (option === "binary") {
        result.value = input.toString(2);
    } else if (option === "hexadecimal") {
        result.value = input.toString(16).toUpperCase();
    }
}