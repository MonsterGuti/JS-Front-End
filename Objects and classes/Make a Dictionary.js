function makeDictionary(input) {
    let dictionary = {};

    for (let json of input) {
        let obj = JSON.parse(json);

        let term = Object.keys(obj)[0];
        let definition = obj[term];

        dictionary[term] = definition;
    }

    let sortedDictionary = Object.entries(dictionary)
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (let [term, definition] of sortedDictionary) {
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}