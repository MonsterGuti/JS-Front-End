function wordsTracker(input) {
    let searchedWords = input.shift().split(" ");
    let words = {};

    for (let word of searchedWords) {
        words[word] = 0;
    }

    for (let word of input) {
        if (words.hasOwnProperty(word)) {
            words[word]++;
        }
    }

    let sortedWords = Object.entries(words);

    sortedWords.sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sortedWords) {
        console.log(`${word} - ${count}`);
    }
}