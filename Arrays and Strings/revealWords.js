function RevealWords(words, text) {
    words = words.split(", ");
    for (let word of words) {
        text = text.replace('*'.repeat(word.length), word);
    }
    console.log(text);
}