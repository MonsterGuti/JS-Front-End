function hashtagWords(input) {
    let words = input.split(" ")
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        if (word.startsWith("#") && word.length > 1) {
            let asciiCode = word.charCodeAt(1)
            if ((asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122)) {
                console.log(word.substring(1))
            }
        }
    }
}
