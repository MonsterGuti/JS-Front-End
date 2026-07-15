function findWord(word, text) {
    word = word.toLowerCase();

    let words = text.toLowerCase().split(" ");

    for (let currentWord of words) {
        if (currentWord === word) {
            console.log(word);
            return;
        }
    }

    console.log(`${word} not found!`);
}