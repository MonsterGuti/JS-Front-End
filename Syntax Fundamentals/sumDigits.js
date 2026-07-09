function sumDigits(num) {
    let sum = 0;
    let numString = num.toString();
    for (let i = 0; i < numString.length; i++) {
        sum += parseInt(numString[i]);
    }
    return sum;
}