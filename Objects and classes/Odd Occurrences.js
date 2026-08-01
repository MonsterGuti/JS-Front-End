function oddOccurrences(input) {
    let words = input.toLowerCase().split(' ');
    let occurrences = {};

    for (let word of words) {
        if (occurrences.hasOwnProperty(word)) {
            occurrences[word]++;
        } else {
            occurrences[word] = 1;
        }
    }

    let oddOccurrences = [];
    for (let word in occurrences) {
        if (occurrences[word] % 2 !== 0) {
            oddOccurrences.push(word);
        }
    }
    console.log(oddOccurrences.join(' '));
}