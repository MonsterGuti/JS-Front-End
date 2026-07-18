function oddAndEvenSum(numbers) {
    let numAsString = numbers.toString();
    let myArray = numAsString.split('');
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < myArray.length; i++) {
        let currentNum = Number(myArray[i]);
        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}
