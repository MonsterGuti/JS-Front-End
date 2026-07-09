function sortNumbers(arr) {
    let sortedNumbers = arr.sort((a, b) => a - b);
    let resultArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            resultArray.push(sortedNumbers.shift());
        } else {
            resultArray.push(sortedNumbers.pop());
        }
    }

    return resultArray;
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));