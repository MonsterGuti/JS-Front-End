function solve() {
    let text = document.getElementById("text").value;
    let convention = document.getElementById("naming-convention").value;
    let result = document.getElementById("result");

    let words = text.toLowerCase().split(" ");

    if (convention === "Camel Case") {
        let camelCase = words[0];

        for (let i = 1; i < words.length; i++) {
            camelCase += words[i][0].toUpperCase() + words[i].slice(1);
        }

        result.textContent = camelCase;
    }
    else if (convention === "Pascal Case") {
        let pascalCase = "";

        for (let word of words) {
            pascalCase += word[0].toUpperCase() + word.slice(1);
        }

        result.textContent = pascalCase;
    }
    else {
        result.textContent = "Error!";
    }
}