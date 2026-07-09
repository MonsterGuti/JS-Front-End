function sortNumbers(arr) {
    let sortedNumbers = arr.sort((a, b) => a - b);
    let resultArray = [];
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        if (i % 2 === 0) {
            resultArray.push(sortedNumbers.shift());
        } else {
            resultArray.push(sortedNumbers.pop());
        }
    }

    return resultArray;
}
