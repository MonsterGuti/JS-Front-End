function sameNumbers(num) {
    let number = num.toString();
    let firstDigit = number[0];
    let sum = 0;
    let isSame = true;

    for (let i = 0; i < number.length; i++) {
        if (number[i] !== firstDigit) {
            isSame = false;
        }

        sum += Number(number[i]);
    }

    console.log(isSame);
    console.log(sum);
}