function solve() {

    let text = document.getElementById("input").value;

    let output = document.getElementById("output");

    let sentences = text.split(".");
    sentences.pop();

    for (let i = 0; i < sentences.length; i += 3) {

        let paragraph = document.createElement("p");

        let currentSentences = sentences.slice(i, i + 3);

        paragraph.textContent = currentSentences.join(". ") + ".";

        output.appendChild(paragraph);
    }
}